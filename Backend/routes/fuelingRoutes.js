import express from 'express';
import {
  createFueling,
  getAllFuelings,
  getFuelingById,
  updateFueling,
  deleteFueling,
} from '../controllers/fuelingController.js';

const router = express.Router();

router.route('/')
  .get(getAllFuelings)   
  .post(createFueling);     

router.route('/:id')
  .get(getFuelingById)        
  .patch(updateFueling)  
  .delete(deleteFueling);   

export default router;
