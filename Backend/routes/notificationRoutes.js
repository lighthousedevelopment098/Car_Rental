// routes/notificationRoutes.js
import express from 'express';
import {
  sendPreDueDateReminder,
  sendDueDateAlert,
} from '../controllers/notificationController.js';

const router = express.Router();

// Route to manually trigger pre-due date reminders
router.get('/pre-due-reminder', sendPreDueDateReminder);

// Route to manually trigger due date alerts
router.get('/due-date-alert', sendDueDateAlert);

export default router;
