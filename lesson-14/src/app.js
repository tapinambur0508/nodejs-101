import path from 'node:path';

import express from 'express';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import studentRoutes from './routes/students.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { swaggerDocs } from './middlewares/swaggerDocs.js';

const app = express();

app.use(express.static(path.resolve('src', 'uploads')));
app.use('/api-docs', swaggerDocs());

app.use(cookieParser());

app.use(authRoutes);
app.use(usersRoutes);
app.use(studentRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
