import express from 'express';
import {
  createCard,
  getAllCards,
  getCardById,
  updateCard,
  deleteCard,
} from '../controllers/cardController.js';

const router = express.Router();

router.route('/')
  .get(getAllCards)     
  .post(createCard);     

router.route('/:id')
  .get(getCardById)  
  .patch(updateCard)      
  .delete(deleteCard);   

export default router;
