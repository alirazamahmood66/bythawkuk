import { Router } from 'express';
import healthRoutes from './healthRoutes.js';
import contactRoutes from './contact.routes.js';

const apiRouter = Router();

// Health check router
apiRouter.use('/health', healthRoutes);

// Contact & Lead Generation router
apiRouter.use('/contact', contactRoutes);

export default apiRouter;
