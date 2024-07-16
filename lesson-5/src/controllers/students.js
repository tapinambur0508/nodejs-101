import createHttpError from 'http-errors';

import { Student } from '../models/student.js';

async function getStudents(req, res) {
  const students = await Student.find();

  res.send(students);
}

async function getStudentById(req, res, next) {
  const { studentId } = req.params;

  const user = await Student.findById(studentId);

  if (user === null) {
    // const error = new Error("Student not found")
    // error.status = 404;

    // return next(error);

    return next(createHttpError(404, 'Student not found'));
  }

  res.send({ status: 200, data: user });
}

export { getStudents, getStudentById };
