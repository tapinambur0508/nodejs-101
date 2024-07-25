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
import { studentSchema } from '../validations/students.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidID } from '../middlewares/isValidID.js';

const router = express.Router();
const jsonParser = express.json();

router.get('/students', ctrlWrapper(getStudents));
router.get('/students/:id', isValidID, ctrlWrapper(getStudentById));

router.post(
  '/students',
  jsonParser,
  validateBody(studentSchema),
  ctrlWrapper(createStudent),
);

router.delete('/students/:id', isValidID, ctrlWrapper(deleteStudent));

router.put('/students/:id', isValidID, jsonParser, ctrlWrapper(updateStudent));

router.patch(
  '/students/:id/duty',
  isValidID,
  jsonParser,
  ctrlWrapper(changeStudentDuty),
);

export default router;
