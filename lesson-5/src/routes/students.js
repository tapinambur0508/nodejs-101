import { Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getStudents, getStudentById } from '../controllers/students.js';

const router = Router();

router.get('/students', ctrlWrapper(getStudents));
router.get('/students/:studentId', ctrlWrapper(getStudentById));

export default router;
