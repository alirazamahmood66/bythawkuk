import morgan from 'morgan';
import { Request, Response } from 'express';

// Formatted request logging
export const requestLogger = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  {
    skip: (req: Request, _res: Response) => {
      // Don't clutter logs with high-frequency health checks in production if desired
      return false;
    },
  }
);
