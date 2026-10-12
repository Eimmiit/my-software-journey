import Student from '../models/students.js'
import Course from '../models/courses.js'
import { calculateResult, calcCGPA } from '../services/resultService.js';
import Wallets from '../models/wallets.js'

// Registering new Student
const eimmiit = new Student(1, 'Eimmiit', 'Computer Science', 100);
// console.log(eimmiit)

// Registering new course
const python = new Course(101, 'python', 3);
const javascript = new Course(102, 'javascript', 2);
const rust = new Course(103, 'rust', 4);

// Enrollment
eimmiit.enroll(python);
eimmiit.enroll(javascript);
eimmiit.enroll(rust);

eimmiit.addScore(python);
eimmiit.addScore(javascript);
eimmiit.addScore(rust);

console.log(calcCGPA(calculateResult(eimmiit)))


