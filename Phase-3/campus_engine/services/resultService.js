export function calculateResult(student) {
    let [...totalStudents] = student.courses;
    console.log(totalStudents)
    const totalCourseScore = totalStudents.reduce(function (count, { score }) {
        return score += count;
    }, 0)
    return totalCourseScore;
}
export function calcCGPA(result){
    let cgpa = (result + 100) / 2;
    return `your cgpa is ${cgpa}`
}