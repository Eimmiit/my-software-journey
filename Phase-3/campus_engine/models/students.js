class Student {
    constructor(id, name, department, level) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.level = level;
        this.courses = []
        this.wallet = 0;
    }

    introduce() {
        return `Hi i am ${this.name}`
        // the new enrolled students, with the id of ${this.id} in the ${this.department} department, level ${this.level}
    };
    promote() {
        this.level += 100;
        return `${this.name} got promoted, to ${this.level}`
    };

    enroll(courseToEnroll) {
        this.courses.push(courseToEnroll)
        return `${this.name} got enrolled in ${courseToEnroll.courseName}`
    }

    addScore(course) {
        let randomScore = [85, 34, 20, 52, 91, 77, 46, 12, 63, 8]
        let randomScoreNum = Math.floor(Math.random() * randomScore.length)

        course.score = randomScore[randomScoreNum];
    }

    walletTransaction(wallet){
        this.wallet = wallet;
        return this.wallet;
    }
}

export default Student;