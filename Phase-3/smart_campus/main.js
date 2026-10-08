import { findCourse } from './courses.js';
import { findStudent } from './students.js';

console.log(findCourse(101));
console.log(findStudent(1));
async function loadAnalytics() {
    const analytics = await import("./analytics.js");

    analytics.generateAnalytics();
}
loadAnalytics()
