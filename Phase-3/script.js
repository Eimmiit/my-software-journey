// Stack call and Execution
// function one() {
//     console.log("1");
//     two();
//     console.log("2");
// }
// function two() {
//     console.log("3");
// }
// console.log("0");
// one();
// console.log("4");


// function add(a, b) {
//     return a + b;
// }
// function calculate() {
//     let result = add(10, 20);
//     return result * 2;
// }
// let answer = calculate();
// console.log(answer);

// function calculate() {
//     return getTotal();
// }
// function getTotal() {
//     return calculate();
// }
// console.log(calculate());

// function outer() {
//     console.log("A");

//     middle();

//     console.log("B");
// }

// function middle() {
//     console.log("C");

//     inner();

//     console.log("D");
// }

// function inner() {
//     console.log("E");
// }

// outer();

// console.log("F");


// Scope, lexical scope and closure
// function createStudent(name){
//     let score = 3;
//     return {
//         getName(){
//             return name
//         },
//         addScore(points){
//             return score += points;
//         },
//         getScore(){
//             return score;
//         }
//     }
// }
// let student = createStudent('Eimmiit');
// console.log(student.getName())
// console.log(student.addScore(23))


// function createCounter(){
//     let count = 0;
//     function increment(){
//         count++
//         console.log('Count increased to ' + count);
//     }
//     function getCount(){
//         return count;
//     }
//     return {increment, getCount}
// }
// const counter = createCounter();

// counter.increment()
// counter.increment()
// counter.increment()

// console.log(counter.getCount())


// let name = "Global";

// function showName() {
//     console.log(name);
// }

// function test() {
//     let name = "Local";

//     showName();
// }

// test();


// function createStudent(name) {

//     let subject = '';

//     function study(subject){
//         return `subject is ${subject}`;
//     }
//     function getSubjects(){
//         return subject
//     }
//     return {study, getSubjects}
// }

// let student = createStudent("Eimmiit")
// student.study('javascript')
// student.study('git')
// console.log(student.getSubjects());
// console.log(student.subjects);


// function createCounter() {
//     let count = 0;

//     return {
//         increase() {
//             count++;
//         },

//         getCount() {
//             return count;
//         }
//     };
// }

// let counter1 = createCounter();
// let counter2 = createCounter();

// counter1.increase();
// counter1.increase();

// counter2.increase();

// console.log(counter1.getCount());
// console.log(counter2.getCount());


// Correction 
// function createStudent(name) {
//     let subjects = [];

//     function study(subject) {
//         subjects.push(subject);
//     }
//     function getSubjects() {
//         return subjects;
//     }
//     return {
//         study,
//         getSubjects
//     };
// }
// let student = createStudent("Eimmiit");
// student.study("JavaScript");
// student.study("Git");
// console.log(student.getSubjects());


// function createStudent(name) {
//     // let subjects = '';
//     let subjects = []
//     function study(subject){
//         return subjects.push(subject)
//         // return subjects += subject;
//     }
//     function getSubjects(){
//         return subjects
//     }
//     return {
//         study, getSubjects
//     }
// }

// let student = createStudent("Eimmiit");

// student.study("JavaScript");
// student.study("Git");
// student.study("Css");

// console.log(student.getSubjects());

// Engineering Challenge 2
// function createStudentWallet(studentName) {
//     let walletBalance = 0

//     function getName(){
//         return studentName;
//     }
//     function deposit(amount){
//         return walletBalance += amount;

//     }
//     function pay(amount){
//         return walletBalance -= amount;
//     }
//     function getBalance(){
//         return walletBalance;
//     }
//     return {
//         getName, deposit, pay, getBalance
//     }
// }

// let wallet = createStudentWallet("Eimmiit");

// wallet.deposit(500);
// wallet.deposit(300);
// console.log(wallet.walletBalance);


// console.log(wallet.getName());
// console.log(wallet.getBalance());

// wallet.pay(200);

// console.log(wallet.getBalance());

// let wallet1 = createStudentWallet("sunday")
// wallet1.deposit(1000)
// wallet1.pay(100)
// console.log(wallet1.getBalance())

// let wallet2 = createStudentWallet("sunday")
// wallet2.deposit(4000)
// wallet2.pay(500)
// console.log(wallet2.getBalance())
