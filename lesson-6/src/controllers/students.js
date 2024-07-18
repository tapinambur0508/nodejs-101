import createHttpError from 'http-errors';

import * as StudentService from '../services/students.js';

async function getStudents(req, res) {
  const students = await StudentService.getStudents();

  res.send({ status: 200, data: students });
}

async function getStudentById(req, res, next) {
  const { studentId } = req.params;

  const student = await StudentService.getStudentById(studentId);

  if (student === null) {
    return next(createHttpError(404, 'Student not found'));
  }

  res.send({ status: 200, data: student });
}

async function createStudent(req, res, next) {
  const student = {
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
    year: req.body.year,
  };

  const createdStudent = await StudentService.createStudent(student);

  res
    .status(201)
    .send({ status: 201, message: 'Student created', data: createdStudent });
}

async function deleteStudent(req, res, next) {
  const { studentId } = req.params;

  const result = await StudentService.deleteStudent(studentId);

  if (result === null) {
    return next(createHttpError(404, 'Student not found'));
  }

  // res.status(204).end();

  res.send({ status: 200, message: 'Student deleted', data: result });
}

async function updateStudent(req, res, next) {
  const { studentId } = req.params;

  const student = {
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
    year: req.body.year,
  };

  const result = await StudentService.updateStudent(studentId, student);

  if (result === null) {
    return next(createHttpError(404, 'Student not found'));
  }

  res
    .status(200)
    .send({ status: 200, message: 'Student updated', data: result });
}

async function changeStudentDuty(req, res, next) {
  const { studentId } = req.params;

  const duty = req.body.duty;

  const result = await StudentService.changeStudentDuty(studentId, duty);

  console.log({ result });

  res.send('Duty');
}

export {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudent,
  updateStudent,
  changeStudentDuty,
};
