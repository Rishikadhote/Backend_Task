import queueService from '../services/queueService.js';

describe('Patient Queue Service', () => {
  beforeEach(() => {
    queueService.getQueue().length = 0;
  });

  test('addPatient adds a new patient to the queue', () => {
    const patient = queueService.addPatient('Test Patient', 3);
    expect(patient.name).toBe('Test Patient');
    expect(patient.triageLevel).toBe(3);
    expect(patient.status).toBe('waiting');
  });

  test('patients are sorted by triageLevel first', () => {
    queueService.addPatient('Low', 5);
    queueService.addPatient('Critical', 1);
    const queue = queueService.getQueue();
    expect(queue[0].name).toBe('Critical');
  });

  test('patients with same triageLevel are sorted by arrival time', async () => {
    const p1 = queueService.addPatient('First', 2);
    await new Promise(res => setTimeout(res, 10)); // thoda delay
    const p2 = queueService.addPatient('Second', 2);
    const queue = queueService.getQueue();
    expect(queue[0].name).toBe('First');
    expect(queue[1].name).toBe('Second');
  });

  test('updateStatus changes patient status', () => {
    const p = queueService.addPatient('ToTreat', 2);
    const updated = queueService.updateStatus(p.id, 'treating');
    expect(updated.status).toBe('treating');
  });

  test('updateStatus returns undefined for invalid ID', () => {
    const result = queueService.updateStatus('fake-id', 'treating');
    expect(result).toBeUndefined();
  });
});
