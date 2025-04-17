# 🏥 ER Queue Management API

A real-time Emergency Room Queue Management System built using Node.js and Express. It simulates patient prioritization based on medical urgency (triage levels), with support for real-time updates via WebSockets.

> ⚡ Real-time updates with critical alerts
> 👨‍⚕️ Triage-based prioritization
> 📡 WebSocket-powered notifications

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Real-Time Events](#real-time-events)
- [Testing](#testing)
- [Future Improvements](#future-improvements)

## ✅ Features

- Add patients with triage level (1–5)
- Priority queue based on condition severity & arrival time
- Real-time WebSocket alerts for critical patients
- Patient treatment and discharge workflow
- Middleware-based logging
- Input validation using Joi

  ## 🛠️ Tech Stack

- Node.js
- Express.js
- WebSocket (Socket.IO)
- Joi (Validation)
- UUID (Unique ID generation)
- Nodemon (Dev environment)
- Jest + Supertest (for unit testing)

## 🚀 Installation

```
git clone https://github.com/yourusername/er-queue-api.git
cd er-queue-api
npm install
npm run dev
```

### ➕ POST /api/patients

Adds a new patient to the queue.

#### Request Body:
```json
{
  "name": "Rishika Dhote",
  "triageLevel": 2
}
```
### Response :  
{
  "id": "uuid",
  "name": "Rishika Dhote",
  "triageLevel": 2,
  "status": "waiting"
}

```
## GET /api/patients
Get current queue of all patients.

## PATCH /api/patients/:id/start
Mark patient as "being treated".

## PATCH /api/patients/:id/discharge
Discharge a patient.

##  Real-Time WebSocket Events

- `critical_alert`: Sent when a Level 1 patient arrives
- `queue_update`: Sent on every change in patient queue

## 🧪 Testing

- Unit tests for queue logic using Jest
- API tests using Supertest
- Run tests using:

```bash
npm test
```
## 👨‍💻 Author

- Name: Rishika Dhote
- Email: rishikadhote99@gmail.com

## 📄 License

This project is licensed under the MIT License.
