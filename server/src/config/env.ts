import dotenv from 'dotenv';
import path from 'path';

// Load .env from project root or server dir
dotenv.config();

export interface EnvConfig {
  NODE_ENV: 'development' | 'production' | 'test';
  PORT: number;
  CLIENT_ORIGIN: string;
  MONGODB_URI: string;
  API_PREFIX: string;
  APP_VERSION: string;
}

export const env: EnvConfig = {
  NODE_ENV: (process.env.NODE_ENV as EnvConfig['NODE_ENV']) || 'development',
  PORT: parseInt(process.env.PORT || '5000', 10),
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bythawk',
  API_PREFIX: process.env.API_PREFIX || '/api',
  APP_VERSION: process.env.npm_package_version || '1.0.0',
};
