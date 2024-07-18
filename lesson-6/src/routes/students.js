import express from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudent,
  updateStudent,
  changeStudentDuty,
} from '../controllers/students.js';

const router = express.Router();
const jsonParser = express.json();

router.get('/students', ctrlWrapper(getStudents));
router.get('/students/:studentId', ctrlWrapper(getStudentById));

router.post('/students', jsonParser, ctrlWrapper(createStudent));

router.delete('/students/:studentId', ctrlWrapper(deleteStudent));

router.put('/students/:studentId', jsonParser, ctrlWrapper(updateStudent));

router.patch(
  '/students/:studentId/duty',
  jsonParser,
  ctrlWrapper(changeStudentDuty),
);

export default router;
