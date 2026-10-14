import { Request, Response } from 'express';
import { sendError } from '../utils/apiResponse.js';

export function notFoundHandler(req: Request, res: Response): void {
  sendError(
    res,
    `Resource not found: ${req.method} ${req.originalUrl}`,
    404
  );
}
