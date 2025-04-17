import { v4 as uuidv4 } from 'uuid';
import { io } from '../index.js';

const patientQueue = [];

const addPatient = (name, triageLevel) => {
    const newPatient = {
        id: uuidv4(),
        name,
        triageLevel,
        arrivalTime: Date.now(),
        status: 'waiting',
    };
    patientQueue.push(newPatient);
    sortQueue();
    return newPatient;
};

const sortQueue = () => {
    patientQueue.sort((a, b) => {
        if (a.status !== 'waiting') return 1;
        if (b.status !== 'waiting') return -1;
        if (a.triageLevel !== b.triageLevel) {
            return a.triageLevel - b.triageLevel;
        }
        return a.arrivalTime - b.arrivalTime;
    });
};

const getQueue = () => patientQueue;

const updateStatus = (id, newStatus) => {
    const patient = patientQueue.find(p => p.id === id);
    if (patient) {
        patient.status = newStatus;
        sortQueue();
    }
    return patient;
};

export default {
    addPatient,
    getQueue,
    updateStatus,
};
