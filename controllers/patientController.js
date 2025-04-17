import queueService from '../services/queueServices.js';
import patientSchema from '../utils/validatePatient.js';
import { io } from '../index.js';

export const addPatient = (req, res) => {
    const { error, value } = patientSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const patient = queueService.addPatient(value.name, value.triageLevel);

    res.status(201).json(patient);
};

export const getQueue = (req, res) => {
    const queue = queueService.getQueue();
    res.json(queue);
};

export const startTreatment = (req, res) => {
    const patient = queueService.updateStatus(req.params.id, 'treating');
    if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
    }
    res.json({ message: 'Patient is now being treated', patient });
};

export const dischargePatient = (req, res) => {
    const patient = queueService.updateStatus(req.params.id, 'discharged');
    if (!patient) {
        return res.status(404).json({ message: 'Patient not found' });
    }
    res.json({ message: 'Patient has been discharged', patient });
};
