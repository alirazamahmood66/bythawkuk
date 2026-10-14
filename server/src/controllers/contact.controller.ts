import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { validateContactEnquiry } from '../validators/contact.validator.js';
import { ContactEnquiry } from '../models/contactEnquiry.model.js';
import { sendSuccess, sendError } from '../utils/apiResponse.js';
import { logger } from '../utils/logger.js';

// Simple in-memory sliding rate limiter per IP (max 5 requests per 60 seconds)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

// In-memory fallback queue if MongoDB is in offline standalone mode
const inMemoryEnquiries: Array<Record<string, unknown>> = [];

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return true;
}

export async function handleContactEnquiry(req: Request, res: Response): Promise<void> {
  const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
  const userAgent = req.headers['user-agent'] || 'unknown';

  // 1. Rate Limiting Check
  if (!checkRateLimit(clientIp)) {
    logger.warn(`Rate limit exceeded for contact submissions from IP: ${clientIp}`);
    res.status(429).json({
      success: false,
      message: 'Too many submissions. Please wait a minute before submitting again.',
      timestamp: new Date().toISOString(),
    });
    return;
  }

  // 2. Input Validation and Sanitization
  const validation = validateContactEnquiry(req.body);

  // Honeypot spam trap
  if (validation.isSpam) {
    logger.info(`Spam submission trapped and neutralized from IP: ${clientIp}`);
    // Return simulated success to trick automated spam bots
    sendSuccess(
      res,
      { referenceId: 'BYT-REF-SIM' },
      'Enquiry received successfully.',
      201
    );
    return;
  }

  if (!validation.isValid || !validation.sanitizedData) {
    res.status(400).json({
      success: false,
      message: 'Please review and correct the errors in the form.',
      errors: validation.errors,
      timestamp: new Date().toISOString(),
    });
    return;
  }

  const data = validation.sanitizedData;

  try {
    let enquiryId: string;

    // 3. Database Persistence
    const isDbConnected = mongoose.connection.readyState === 1;

    if (isDbConnected) {
      const enquiry = await ContactEnquiry.create({
        ...data,
        ip: clientIp.substring(0, 45),
        userAgent: typeof userAgent === 'string' ? userAgent.substring(0, 500) : '',
        status: 'new',
      });
      enquiryId = enquiry._id.toString();
      logger.info(`New contact enquiry persisted to MongoDB [ID: ${enquiryId}] from: ${data.email}`);
    } else {
      // Standalone resilient development mode: temporary in-memory queue (non-durable)
      enquiryId = `MEM-${Date.now()}`;
      inMemoryEnquiries.push({
        id: enquiryId,
        ...data,
        ip: clientIp,
        createdAt: new Date(),
        durable: false,
      });
      logger.warn(`[Temporary Fallback] Database offline: Enquiry temporarily held in non-durable memory queue [ID: ${enquiryId}] from: ${data.email}. Permanent storage requires active MongoDB connection.`);
    }

    // 4. Email Notification Notice
    // Outbound SMTP email is deliberately not hardcoded or assumed.
    logger.info(`[Notice] Outbound email service is not configured. Enquiry ${enquiryId} recorded.`);

    // 5. Success Response
    sendSuccess(
      res,
      {
        enquiryId,
        referenceNumber: `BYT-${Date.now().toString().slice(-6)}`,
        status: 'received',
      },
      'Your project enquiry has been received successfully. Our team will review your specification.',
      201
    );
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Unknown server error';
    logger.error('Failed to process contact enquiry:', errorMsg);

    // Return safe, sanitized error response without leaking stack traces or db internals
    sendError(
      res,
      'We were unable to process your enquiry at this time. Please try again or reach out directly.',
      500
    );
  }
}
