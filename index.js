import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import patientRoutes from './routes/patientRoutes.js';
import logger from './middlewares/logger.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server);  

app.use(express.json());
app.use(logger);
app.use('/api/patients', patientRoutes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`ER Queue API is running on port ${PORT}`);
});

export { io };
