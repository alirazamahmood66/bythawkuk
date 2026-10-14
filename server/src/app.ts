import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env.js';
import { requestLogger } from './middleware/requestLogger.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import apiRouter from './routes/index.js';

export function createApp(): Application {
  const app = express();

  // Security headers
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' },
    })
  );

  // Cross-Origin Resource Sharing
  app.use(
    cors({
      origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl/Postman) or matching dev origin
        if (!origin || origin === env.CLIENT_ORIGIN || env.NODE_ENV === 'development') {
          callback(null, true);
        } else {
          callback(new Error('Blocked by CORS policy'));
        }
      },
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );

  // Request parsing
  app.use(express.json({ limit: '1mb' }));
  app.use(express.urlencoded({ extended: true, limit: '1mb' }));

  // HTTP Request Logging
  app.use(requestLogger);

  // Root welcome / basic ping
  app.get('/', (_req, res) => {
    res.json({
      name: 'BYTHAWK API Server',
      domain: 'bythawk.uk',
      status: 'active',
      endpoints: {
        health: `${env.API_PREFIX}/health`,
      },
    });
  });

  // Mount API Router
  app.use(env.API_PREFIX, apiRouter);

  // 404 Handler for undefined routes
  app.use(notFoundHandler);

  // Global Error Handler
  app.use(errorHandler);

  return app;
}
