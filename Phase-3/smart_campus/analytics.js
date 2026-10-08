import students from './students.js';
import courses from './courses.js';
import { getWalletBalance } from './transactions.js'

let analyticsOverall = {}

let studentList = students.map(function (student) {
    return student.name
})
let courseList = courses.map(function (course) {
    return course.name
})

function generateAnalytics() {
    analyticsOverall.listOfStudents = studentList;
    analyticsOverall.listOfCourses = courseList;
    analyticsOverall.availableBalance = getWalletBalance();
    return analyticsOverall;
}
console.log(generateAnalytics())

export {generateAnalytics};