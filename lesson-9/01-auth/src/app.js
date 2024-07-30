import express from 'express';

import authRoutes from './routes/auth.js';
import studentRoutes from './routes/students.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const app = express();

// app.use(express.json());

app.use(authRoutes);
app.use(studentRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
