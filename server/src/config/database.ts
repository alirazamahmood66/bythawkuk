import mongoose from 'mongoose';
import { env } from './env.js';
import { logger } from '../utils/logger.js';

export async function connectDatabase(): Promise<void> {
  // If MongoDB URI is explicitly empty or disabled
  if (!env.MONGODB_URI) {
    logger.warn('MONGODB_URI not configured. Database connection skipped.');
    return;
  }

  try {
    mongoose.connection.on('connected', () => {
      logger.info(`MongoDB connected successfully to ${mongoose.connection.host}`);
    });

    mongoose.connection.on('error', (err) => {
      logger.error('MongoDB connection error:', err.message);
    });

    mongoose.connection.on('disconnected', () => {
      logger.warn('MongoDB disconnected');
    });

    await mongoose.connect(env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown database error';
    logger.warn(`MongoDB initial connection notice: ${errorMsg}`);
    logger.info('Server continuing in resilient standalone mode without database persistence.');
  }
}

export function getDatabaseStatus(): {
  status: 'connected' | 'disconnected' | 'connecting' | 'disabled';
  message?: string;
} {
  const readyState = mongoose.connection.readyState;
  switch (readyState) {
    case 1:
      return { status: 'connected', message: 'MongoDB replica/standalone connected' };
    case 2:
      return { status: 'connecting', message: 'Establishing MongoDB connection...' };
    case 3:
      return { status: 'disconnected', message: 'MongoDB disconnecting...' };
    case 0:
    default:
      return { status: 'disconnected', message: 'MongoDB not currently connected' };
  }
}
