// src/server.js

import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { env } from './utils/env.js';
import { getAllStudents, getStudentById } from './services/students.js';
import { ENV_VARS } from './constants/index.js';
import { notFoundMiddleware } from './middlewares/notFoundMiddleware.js';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware.js';

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World!',
    });
  });

  app.get('/students', async (req, res) => {
    const students = await getAllStudents();
    res.status(200).json({ data: students });
  });

  app.get('/students/:id', async (req, res) => {
    const { studentId } = req.params;
    const student = await getStudentById(studentId);

    res.status(200).json({ data: student });
  });

  app.use(errorHandlerMiddleware);

  app.use(notFoundMiddleware);

  const PORT = Number(env(ENV_VARS.PORT, '3000'));

  app.listen(env(ENV_VARS.PORT, '3000'), () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
