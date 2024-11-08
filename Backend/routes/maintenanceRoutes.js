import express from 'express';
import {
  createMaintenance,
  getAllMaintenanceRecords,
  getMaintenanceById,
  updateMaintenance,
  deleteMaintenance,
} from '../controllers/maintenanceController.js';

const router = express.Router();

router.route('/')
  .get(getAllMaintenanceRecords)    
  .post(createMaintenance);          

router.route('/:id')
  .get(getMaintenanceById)        
  .patch(updateMaintenance)          
  .delete(deleteMaintenance);     

export default router;
