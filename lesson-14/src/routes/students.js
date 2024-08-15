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
import { auth } from '../middlewares/auth.js';

const router = express.Router();
const jsonParser = express.json();

router.get('/students', auth, ctrlWrapper(getStudents));
router.get('/students/:id', auth, isValidID, ctrlWrapper(getStudentById));

router.post(
  '/students',
  auth,
  jsonParser,
  validateBody(studentSchema),
  ctrlWrapper(createStudent),
);

router.delete('/students/:id', auth, isValidID, ctrlWrapper(deleteStudent));

router.put(
  '/students/:id',
  auth,
  isValidID,
  jsonParser,
  ctrlWrapper(updateStudent),
);

router.patch(
  '/students/:id/duty',
  auth,
  isValidID,
  jsonParser,
  ctrlWrapper(changeStudentDuty),
);

export default router;
