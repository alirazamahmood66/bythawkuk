import { Router } from 'express';
import { handleContactEnquiry } from '../controllers/contact.controller.js';

const router = Router();

// POST /api/contact
router.post('/', handleContactEnquiry);

export default router;
