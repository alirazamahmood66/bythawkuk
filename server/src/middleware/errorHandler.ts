import { Request, Response, NextFunction } from 'express';
import { AppError, sendError } from '../utils/apiResponse.js';
import { logger } from '../utils/logger.js';

export function errorHandler(
  err: Error | AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  logger.error('Unhandled Exception caught in middleware:', err.message);

  if (err instanceof AppError) {
    sendError(res, err.message, err.statusCode);
    return;
  }

  // Handle Mongoose CastError or ValidationError
  if (err.name === 'ValidationError') {
    sendError(res, 'Validation failed for incoming payload', 400, err.message);
    return;
  }

  sendError(
    res,
    process.env.NODE_ENV === 'production'
      ? 'An unexpected internal error occurred'
      : err.message,
    500
  );
}
