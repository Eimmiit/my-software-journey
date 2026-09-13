// Part 12 - Engineering Challenge
let students = [
    {
        name: "Eimmiit",
        department: "Computer Science",
        score: 85
    },
    {
        name: "John",
        department: "Cyber Security",
        score: 45
    },
    {
        name: "Sarah",
        department: "Computer Science",
        score: 72
    },
    {
        name: "David",
        department: "Software Engineering",
        score: 38
    },
    {
        name: "Mary",
        department: "Computer Science",
        score: 91
    }
];

function getStudentNames(...students) {
    let studentsName = students.map(function ({ name }) {
        return name;
    })
    console.log(studentsName);
}
getStudentNames(...students);

function getPassedStudents(students) {
    let passedStudents = students.filter(function ({ score }) {
        return score >= 50;
    }).map(function ({ name }) {
        return name;
    })
    return passedStudents;
}
console.log(getPassedStudents(students))

function getFailedStudentNames(students) {
    let failedStudents = students.filter(function ({ score }) {
        return score < 50;
    }).map(function ({ name }) {
        return name;
    })
    return failedStudents;
}
console.log(getFailedStudentNames(students));

function getTotalScore(students){
    let totalScore = students.reduce(function(total, {score}){
        return score + total;
    }, 0)
    // console.log("The total student is " + totalScore);
    return totalScore;
}
console.log(getTotalScore(students))

function getAverageScore(students, totalScr) {
    // let totalScore = students.reduce(function (total, student) {
    //     return student.score + total;
    // }, 0)
    // let averageScore = totalScore / students.length;
    // console.log("the average score is " + averageScore);

    return totalScr(students)/students.length;

}
console.log(getAverageScore(students, getTotalScore));

function getTopStudent(students) {
    let highestScore = 0;
    for(let i = 0; i < students.length; i++){
        if(students[i].score > highestScore){
            highestScore = students[i].score;  
        }
    }
    let topStudent = students.find(function(student){
        return student.score === highestScore
    })
    return topStudent;

    // let highestNum = students.reduce(function (count, student) {
    //     if (count < student.score) {
    //         count = student.score;
    //     }
    //     return count;
    // }, 0)
    // console.log(highestNum);

    // let highestScore = students.reduce(function (highest, { score }) {
    //     if (highest < score) {
    //         highest = score;
    //     }
    //     return highest;
    // }, 0)
    // console.log(highestScore);
};
console.log(getTopStudent(students))

function getLowStudent(students){
    let lowestScore = students[0].score;
    // let lowStudent = students.filter(function({score}){
    //     if(lowestScore > score){
    //         return lowestScore = score;
    //     }
    // })
    // console.log(lowestScore);
    let lowStudentScore = students.reduce(function(lowest, {score}){
        if(lowest > score){
            lowest = score
        }
        return lowest;
    }, lowestScore);
    return lowStudentScore;
}
getLowStudent(students)

function didEveryonePass(students){
    let answerToEvery = students.every(function(student){
        return student.score >= 50;
    })
    console.log(answerToEvery);
}
didEveryonePass(students)

function hasDepartment(students, department){
    let hasDept = students.some(function(student){
        return student.department === department;
    })
    console.log(hasDept);
}
hasDepartment(students, "Computer Science")

function getComputerScienceStudents(students){
    let computerScienceStudent = students.filter(function({department}){
        return department === "Computer Science";
    })
    console.log(computerScienceStudent)
}
getComputerScienceStudents(students);

function highScoreNum(students){
     let highestScore = students.reduce(function (highest, { score }) {
        if (highest < score) {
            highest = score;
        }
        return highest;
    }, 0)
    return highestScore;
}


function getStudentSummary(students){
    let studentSum = {}
    studentSum.totalStudents = students.length;
    studentSum.totalScore = getTotalScore(students);
    studentSum.averageScore = getAverageScore(students, getTotalScore)
    studentSum.passedStudents = getPassedStudents(students).length;
    studentSum.failedStudents = getFailedStudentNames(students).length;
    studentSum.highestScore = highScoreNum(students)
    studentSum.lowestScore = getLowStudent(students)
    console.log(studentSum)
}
getStudentSummary(students);