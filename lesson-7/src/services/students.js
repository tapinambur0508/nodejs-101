import { Student } from '../models/student.js';

function getStudents() {
  return Student.find();
}

function getStudentById(studentId) {
  return Student.findById(studentId); // Student.findOne({_id: studentId});
}

function createStudent(student) {
  return Student.create(student);
}

function deleteStudent(studentId) {
  return Student.findByIdAndDelete(studentId); // Student.findOneAndDelete({_id:studentId });
}

function updateStudent(studentId, student) {
  return Student.findByIdAndUpdate(studentId, student, { new: true }); // Student.findOneAndUpdate({_id:studentId}, student)
}

function changeStudentDuty(studentId, duty) {
  return Student.findByIdAndUpdate(studentId, { onDuty: duty }, { new: true });
}

export {
  getStudents,
  getStudentById,
  createStudent,
  deleteStudent,
  updateStudent,
  changeStudentDuty,
};
