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

// this keyword
// let student = {
//     name: "Eimmiit",
//     brand: "LearnWithEim",
//     introduce: function(){
//         console.log(this.name)
//         console.log(this.brand)
//     }
// }
// student.introduce();

// let result = {
//     name: "Eimmiit",
//     regular: function(){
//         console.log(this.name)
//     },
//     arrow: () => {
//         console.log(this.name)
//     }
// }
// result.regular()
// result.arrow()


// function Student(name){
//     this.name = name
// }
// let student = new Student("Eimmiit")
// console.log(student.name)

// using call()
// function introduce(){
//     console.log(this.name)
// }
// let student = {
//     name: "Eimmiit",
// }
// introduce.call(student)


// bind() & apply()\
// let student = {
//     name: "Eimmiit",
// }
// function introduce(course, level){
//     console.log(this.name + course + level);
// }
// introduce.call(student, "javascript", 400);
// introduce.apply(student,["Python", 400])

// let student = {
//     name: 'Eimmiit',
//     introduce(){
//         console.log(this.name)
//     }
// }
// student.introduce();
// let introduce = student.introduce.bind(student);
// introduce();

// example on this
// const video = {
//     title: 'a',
//     play(){
//         console.log(this);
//     }
// }
// video.play();

// video.pause = function(){
//     console.log(this);
// }
// video.pause();

// function Video(title){
//     this.title = title;
//     console.log(this)
// }
// const v = new Video('a')

// another example
// const video = {
//     title: 'a',
//     tags: ['a','b','c'],
//     showtags(){
//        this.tags.forEach(function(tag){
//         console.log(tag, this.title)
//        }, this)
//     }
// }
// video.showtags()

// call Ecample
// using call() method to call an object using function
// const game = {
//     name: "minecraft",
//     year: 1992
// }
// function getInfo(){
//     console.log(`${this.name} was created in year ${this.year}`);
//     console.log(this)
// }
// getInfo.call(game);
// getInfo.apply(game);

// Example
// const game = {
//     name: "minecraft",
//     year: 1992
// }
// function getInfo(platform, character){
//     console.log(`${this.name} was created in year ${this.year} by ${character} on ${platform} platform`);
//     console.log(this)
// }
// getInfo.call(game, "facebook", "spiderman");
// getInfo.apply(game, ["facebook", "spiderman"]);
// const getGameInfo = getInfo.bind(game, "facebook", "spiderman");
// getGameInfo()

// Exercise
// const book = {
//     title: "Rich dad, poor dad",
//     author: "lewandoski",
// }
// function getInfo(yearOfRelease){
//     console.log(`${this.title} was created by ${this.author} and was release in year ${yearOfRelease}`);
// }
// getInfo.call(book, 2012);
// getInfo.apply(book, [2012]);

// const infoBind = getInfo.bind(book, 2012)
// infoBind()

// Exercise 1
// let student = {
//     name: "Eimmiit",
//     introduce() {
//         console.log(this.name);
//     }
// };
// student.introduce();

// let student = {
//     name: "Eimmiit"
// };
// function introduce(course, level) {
//     console.log(this.name);
//     console.log(course);
//     console.log(level);
// }
// introduce.call(student, "JavaScript", 400);

// let student = {
//     name: "Eimmiit",

//     introduce() {
//         console.log(this.name);
//     }
// };
// let fn = student.introduce();
// fn();


// let student = {
//     name: "Eimmiit",
//     department: "Computer Science",

//     introduce() {
//         console.log(`my name is ${this.name}`);
//         console.log(`I study ${this.department}`);
//     }
// };

// function showStudent() {
//     console.log(`my name is ${this.name}`);
//     console.log(`I study ${this.department}`);
// }

// student.introduce();
// showStudent.call(student);


// let student = {
//     name: "Eimmiit",

//     introduce() {
//         console.log("My name is " + this.name);
//     }
// };
// let introduceStudent = student.introduce.bind(student)
// introduceStudent();


// The prototype chain
// let student = {
//     name: "Eimmiit"
// };
// console.log(student.hasOwnProperty("name"));
// console.log(Object.getPrototypeOf(student));


// let person = {
//     introduce (){
//         console.log('Hello')
//     }
// };
// let student = Object.create(person)
// student.introduce()


// let person = {
//     name: 'Person',
// } 
// let student = Object.create(person)
// student.level = 400

// console.log(Object.getPrototypeOf(student))
// console.log(student)


// function Student(name){
//     this.name = name;
//     this.introduce = function(){
//         console.log(this.name);
//     }
// }
// let student1 = new Student('Eimmiit')
// let student2 = new Student('John')

// function Student(name){
//     this.name = name
// }
// Student.prototype.introduce = function(){
//     console.log(this.name)
// }


// __Proto__
// const books = ['Harry potter', 'Lord of the rings']
// console.log(books)
// console.log(books.__proto__)

// Example
// function Pokemon(name, type){
//     this.name = name;
//     this.type = type;
// }
// Pokemon.prototype.speak = function(){
//     console.log('Pika Pika')
// }
// Pokemon.prototype.sims = "Game";
// let pikachu = new Pokemon('Pikashu', 'Electric');
// console.log(pikachu.sims)


// Engineering challenge
// function Student(name, department) {
//     this.name = name;
//     this.department = department;
// }

// Student.prototype.introduce = function(){
//     console.log(`My name is ${this.name} and I study ${this.department}`)
// }

// let student1 = new Student("Eimmiit", "Computer Science");
// let student2 = new Student("John", "Cyber Security");
// student1.introduce()
// student2.introduce()

// console.log(student1.name, student2.name)
// console.log(student1.department, student2.department)


// Debugging challenge
// function Student(name) {
//     this.name = name;
// }
// Student.prototype.introduce = function () {
//     console.log(this.name);
// };
// let student1 = new Student("Eimmiit");
// let student2 = new Student("John");
// student1.introduce()
// student2.introduce()

// Phase 3, Lesson 3.5
// constructor, classes and oop
// function Student(name, department) {
//     this.name = name;
//     this.department = department;
// }

// Student.prototype.introduce = function () {
//     console.log(
//         `My name is ${this.name}`
//     );
// };
// let student = new Student("Eimmiit", "Computer Science");
// student.introduce();


// class Student {
//     constructor(name) {
//         this.name = name;
//     }

//     introduce() {
//         console.log(this.name);
//     }
// }
// const student = new Student("Eimmiit");
// student.introduce()

// Getter
// class Student {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// console.log(student.fullName);

// Setter
// class Student {
//     constructor(name) {
//         this.name = name;
//     }

//     set studentName(value) {
//         this.name = value.trim();
//     }
// }
// student.studentName = "   Eimmiit   "; 
// console.log(student.name);


// Encapsulation
// class Wallet {
//     #balance = 0;
//     deposit(amount) {
//         this.#balance += amount;
//     }
//     getBalance() {
//         return this.#balance;
//     }
// }
// const wallet = new Wallet();
// wallet.deposit(500);
// console.log(wallet.getBalance());

// Inheritance
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     introduce() {
//         console.log(`My name is ${this.name}`);
//     }
// }
// class Student extends Person {}
// let student = new Student("Eimmiit");

// student.introduce();

// Further More
// const s2 = new String('Hello')
// console.log(typeof s2)
// console.log(navigator.appVersion)

// Simple Object declaration
// const book1 = {
//     title: "Book One",
//     author: "John Doe",
//     year: "2013",
//     getSummary: function(){
//         return `${this.title}  was written by ${this.author} in ${this.year}`;
//     }
// }
// console.log(book1.getSummary());

// const book2 = {
//     title: "Book Two",
//     author: "Jane Doe",
//     year: "2016",
//     getSummary: function(){
//         return `${this.title}  was written by ${this.author} in ${this.year}`;
//     }
// }
// console.log(book2.getSummary());
// console.log(Object.values(book1)) //to get values out of an object
// console.log(Object.keys(book1)) //to get keys out of an objects

//  moving to Construtor
// Example 1
// function Book(){
//     console.log('Book initialised,...')
// }
// Book();
// Instantiating an Objects
// let book1 = new Book();
// let book2 = new Book();
// book1;
// book2;

// Another Example 2
// function Book(title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.getSummary = function(){
//         return `${this.title}  was written by ${this.author} in ${this.year}`
//     } 

// }
// let book1 = new Book("Book One", "John Doe", 2023);
// let book2 = new Book('Book two','Jane Doe', 2022);

// console.log(book1.getSummary());
// console.log(book2.getSummary());

// Example 3
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// this.getSummary = function () {
//     return `${this.title}  was written by ${this.author} in ${this.year}`
// }
// }
// getSummary
// Book.prototype.getSummary = function () {
//     return `${this.title}  was written by ${this.author} in ${this.year}`
// };
// getAge
// Book.prototype.getAge = function(){
//     const years = new Date().getFullYear() - this.year
//     return `${this.title} is ${years} years old`
// }
// revise / change year
// Book.prototype.revise = function(newYear){
//     this.year = newYear;
//     this.revised = true;
// }

// let book1 = new Book("Book One", "John Doe", 2023);
// let book2 = new Book('Book two', 'Jane Doe', 2022);

// console.log(book1.getSummary());
// console.log(book2.getSummary());
// console.log(book1.getAge());
// console.log(book2.getAge());
// book1.revise('2018');
// console.log(book1);
// book2.revise('2014');
// console.log(book2);


// INheritance
// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.getSummary = function () {
//         return `${this.title}  was written by ${this.author} in ${this.year}`
//     }
// }
//getSummary
// Book.prototype.getSummary = function () {
//     return `${this.title}  was written by ${this.author} in ${this.year}`
// };

// Magazine constructor
// function Magazine(title, author, year, month){
//     Book.call(this, title, author, year);
//     this.month = month;
// }

// Inherit prototype
// Magazine.prototype = Object.create(Book.prototype)

// instantiating
// const mag1 = new Magazine('Mag one', 'John Doe', '2018', 'Jan')

// Magazine.prototype.constructor = Magazine //Using own constructor
// console.log(mag1)


// Another Example
// const bookProtos = {
//     getSummary: function () {
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     },
//     getAge: function () {
//         const years = new Date().getFullYear() - this.year
//         return `${this.title} is ${years} years old`;
//     }
// }

// Create Object
// const book1 = Object.create(bookProtos)
// book1.title = "Book One"
// book1.author = "John Doe"
// book1.year = "2013"

// console.log(book1.getSummary());

// const book1 = Object.create(bookProtos, {
//     title: { value: "Book One" },
//     author: { value: "John Doe" },
//     year: { value: "2013" }
// })
//  console.log(book1);



// classes
// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//     getSummarry() {
//         return `${this.title} was written by ${this.author} in ${this.year}`
//     }
//     getAge() {
//         const years = new Date().getFullYear() - this.year
//         return `${this.title} is ${years} years old`;
//     }
//     revise(newYear) {
//         this.year = newYear;
//         this.revised = true;
//     }

//     static topBookStore(){
//         return `Barnes and Nobles`
//     }

// }
// instantiate
// const book1 = new Book('Book one', 'John Doe', '2013');
// console.log(book1)
// book1.revise('2018');
// console.log(book1)

// console.log(Book.topBookStore())


// Magazine subclasses
// class Magazine extends Book{
//     constructor(title, author, year, month){
//         super(title, author, year);
//         this.month = month
//     }
// }
// const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');
// console.log(mag1)


// Getters and setters
// class Person{
//     constructor(first, last){
//         this.first = first;
//         this.last = last;
//     }
//     get fullName(){
//         return `${this.first} ${this.last}`;
//     }
//     set fullName(newName){
//         // console.log("You try to change name")
//         // console.log(newName)
//         const [first, last] = newName.split(" ");
//         this.first = first;
//         this.last = last
//     }
// }
// const actor = new Person('Brendan', 'Fraser')
// actor.first = "Colt";
// console.log(actor.fullName)

// actor.fullName = 'Timothe Chalant';
// actor.last



// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
// }
// const rectangle = new Rectangle(100000, 'pizz')
// console.log(rectangle.width)
// console.log(rectangle.height)