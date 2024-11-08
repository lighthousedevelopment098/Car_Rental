import express from 'express';
import {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
} from '../controllers/carController.js';

const router = express.Router();

router.route('/')
  .get(getAllCars)     
  .post(createCar);      

router.route('/:id')
  .get(getCarById)       
  .patch(updateCar)    
  .delete(deleteCar);    

export default router;
