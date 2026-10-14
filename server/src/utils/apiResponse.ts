import { Response } from 'express';
import type { ApiSuccessResponse, ApiErrorResponse } from '../types/index.js';

export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode = 500, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

export function sendSuccess<T>(
  res: Response,
  data: T,
  message = 'Request completed successfully',
  statusCode = 200
): Response<ApiSuccessResponse<T>> {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    timestamp: new Date().toISOString(),
  });
}

export function sendError(
  res: Response,
  message = 'An unexpected error occurred',
  statusCode = 500,
  error?: string
): Response<ApiErrorResponse> {
  const isDev = process.env.NODE_ENV !== 'production';
  return res.status(statusCode).json({
    success: false,
    message,
    ...(error ? { error } : {}),
    timestamp: new Date().toISOString(),
  });
}
