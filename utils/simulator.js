import queueService from '../services/queueServices.js';
import { io } from '../index.js';

const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];

function randomName() {
  return names[Math.floor(Math.random() * names.length)];
}

export function startSimulation(interval = 5000) {
  setInterval(() => {
    const name = randomName();
    const triageLevel = Math.floor(Math.random() * 5) + 1; 
    const patient = queueService.addPatient(name, triageLevel);
    console.log(`Simulated: ${name} with level ${triageLevel}`);
    io.emit('queueUpdated', queueService.getQueue());
  }, interval);
}
