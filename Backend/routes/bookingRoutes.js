import express from 'express';
import {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} from '../controllers/bookingController.js';

const router = express.Router();

router.route('/')
  .get(getAllBookings)      
  .post(createBooking);     

router.route('/:id')
  .get(getBookingById)    
  .patch(updateBooking)   
  .delete(deleteBooking);  

export default router;
