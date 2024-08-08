import { Student } from '../models/student.js';

async function getStudents({
  page,
  perPage,
  sortBy,
  sortOrder,
  filter,
  parentId,
}) {
  const limit = perPage;
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const studentQuery = Student.find();

  if (filter.minYear) {
    studentQuery.where('year').gte(filter.minYear);
  }

  if (filter.maxYear) {
    studentQuery.where('year').lte(filter.maxYear);
  }

  studentQuery.where('parentId').equals(parentId);

  const [students, count] = await Promise.all([
    studentQuery
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(limit)
      .exec(),
    Student.countDocuments(studentQuery),
  ]);

  const totalPages = Math.ceil(count / perPage);

  return {
    students,
    page,
    perPage,
    totalItems: count,
    hasNextPage: totalPages - page > 0,
    hasPreviousPage: page > 1,
  };
}

// // Solution 1
// function getStudentById(studentId, parentId) {
//   return Student.findOne({_id: studentId, parentId});
// }

// Solution 2
function getStudentById(studentId) {
  return Student.findById(studentId);
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
