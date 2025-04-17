import express from 'express';
import { addPatient, getQueue, startTreatment, dischargePatient } from '../controllers/patientController.js';

const router = express.Router();

router.post('/', addPatient);
router.get('/', getQueue);
router.patch('/:id/treat', startTreatment);
router.delete('/:id', dischargePatient);

export default router;
