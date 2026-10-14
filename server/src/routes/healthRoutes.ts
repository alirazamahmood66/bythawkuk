import { Router } from 'express';
import { HealthController } from '../controllers/healthController.js';

const router = Router();

/**
 * @route   GET /api/health
 * @desc    Health check endpoint for BYTHAWK server status & dependencies
 * @access  Public
 */
router.get('/', HealthController.getHealth);

export default router;
