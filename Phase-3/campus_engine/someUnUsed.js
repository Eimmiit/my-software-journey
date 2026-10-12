// registering new studdent
// function getStudentDetails(){
//     let newStudentName = 'Eimmiit';
//     let newStudentId = 1;
//     let newStudentLevel = 100;
//     let newStudentDepartment = 'Computer Science';

//     const newStudentDetails = new Student(newStudentId, newStudentName, newStudentDepartment, newStudentLevel);
//     studentList.push(newStudentDetails);
// }
// getStudentDetails()
// console.log(studentList)

students = {
  id: 1,
  name: 'Eimmiit',
  department: 'Computer Science',
  level: 100,
  courses: [
    {
      courseId: 101,
      courseName: 'python',
      courseUnits: 3,
      score: 8
    },
    {
      courseId: 102,
      courseName: 'javascript',
      courseUnits: 2,
      score: 63
    }
  ]
}

let [...totalStudents] = students.courses;
console.log(totalStudents)
const totalCourseScore = totalStudents.reduce(function(count, { score }){
    return score += count;
},0)
console.log(totalCourseScore)