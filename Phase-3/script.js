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
// const rectangle = new Rectangle(100000, 'pizza')
// console.log(rectangle.width)
// console.log(rectangle.height)


// sneak peak into destructuring and spread operator
// function swimmer({name}){
//     return {
//         swim: () => console.log(`${name} swim`),
//     }
// }
// function attackerAndWalker({name}){
//     return {
//         attack: ()=> console.log(`${name} attacked`),
//         walk: ()=> console.log(`${name} walked`)
//     }
// }
// function flyer({name}){
//     return {
//         fly: () => console.log(`${name} fly`),
//     }
// }

// function swimMonsterCreator({name}){
//     const monster = { name: name}

//     return {
//         ...monster,
//         ...attackerAndWalker(monster),
//         ...swimmer(monster)
//     }
// }

// function flyingSwimmingMonsterCreator({name}){
//     const monster = { name: name}

//     return {
//         ...monster,
//         ...attackerAndWalker(monster),
//         ...swimmer(monster),
//         ...flyer(monster)
//     }
// }

// const obj = flyingSwimmingMonsterCreator('Monster')
// obj.attack()
// obj.walk()
// obj.swim()
// obj.fly()




// Exercise 1 and 2
// class Car {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     };

//     describe() {
//         return `${this.brand} ${this.model} ${this.year}`;
//     }
// }
// const car1 = new Car('toyota', "camery", '2024')
// const car2 = new Car('ferari', "larmbogini", '2026')
// console.log(car1.describe());
// console.log(car2.describe());


// Exercise 3
// true
// false
// and it is because car object was pass into the car, brand is not a prototype, but describe is


// Prediction challenge
// Eimmiit
// John
// true
// false
// hasOwn is like a own object checker, and in the case it check if the string belong to the object


// Debugging challenge
// new was not added, to create a new object from student
// class Student {
//     constructor(name) {
//         this.name = name;
//     }
//     getName() {
//         return this.name;
//     }
// }
// const student = new Student("Eimmiit");
// console.log(student.getName());


// Engineering challenge
// class Student {
//     constructor(name, department, level) {
//         this.name = name;
//         this.department = department;
//         this.level = level;
//     }
//     introduce() {
//         return `I am ${this.name}, i am in ${this.department} department, and i am in ${this.level} level`
//     }
//     promote() {
//         return `${this.name} was promoted`
//     }
// }


// let student1 = new Student('Eimmiit', 'Comp. sci', 300)
// let student2 = new Student('Favour', 'Agri. sci', 200)
// console.log(student1.introduce())
// console.log(student2.introduce())
// console.log(Object.hasOwn(student1, 'name'))
// console.log(Object.hasOwn(student2, 'introduce'))


// // sophisticated challenge
// class StudentWallet {
//     constructor(balance) {
//         this.balance = balance;
//     }
//     privateBalance() {
//         return this.balance
//     }
//     deposit(amount) {
//         this.amount = amount
//         this.balance += this.amount;
//         return this.balance;
//     }
//     withdraw(amount) {
//         this.balance -= this.amount;
//         return this.balance;
//     }
//     getBalance() {
//         return this.balance
//     }
// }


// // Harder Challenge
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     introduce() {
//         console.log(`My name is ${this.name}`);
//     }
// }


// class Student extends Person {
//     constructor(name, department) {
//         super(name)
//         this.department = department;
//        super(departmetn)
//     }
// }


// class Student {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     get fullname() {
//         return `my name is ${this.firstname} ${this.lastname}`
//     }
//     set studentName(value) {
//         this.firstname = value
//     }
// }
// const student = new Student('Eimmiit', 'Ikili')
// console.log(student.fullname);
// student.studentName = "John";
// console.log(student.fullname);


// class Person {
//     constructor(name) {
//         this.name = name
//     }
//     introduce() {
//         return `${this.name} is a girl`
//     }
// }
// class Student extends Person {
//     constructor(name, department) {
//         super(name);
//         this.department = department;
//     }
//     get descr(){
//         return `${this.name} is in ${this.department} department`
//     }
// }
// let student1 = new Student('Eim', 'Comp sci.')
// console.log(student1.introduce())
// console.log(student1.descr)


// PHASE 3, lesson 3.6
// const error = new Error("Something went wrong");
// console.log(error);
// console.log(error.name);
// console.log(error.message);
// console.log(error.stack);


// function withdraw(balance, amount) {
//     if (amount > balance) {
//         throw new Error("Insufficient balance");
//     }
//     return balance - amount;
// }
// console.log(withdraw(5000, 2000));

// function withdraw(balance, amount) {
//     if (amount > balance) {
//         throw new Error("Insufficient balance");
//     }
//     return balance - amount;
// }
// console.log(withdraw(5000, 7000));
// console.log("Transaction completed");


// function withdraw(balance, amount) {
//     if (amount > balance) {
//         throw new Error("Insufficient balance");
//     }
//     return balance - amount;
// }
// try {
//     const result = withdraw(5000, 7000);
//     console.log(result);
// }
// catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }
// console.log("Program continues...");

// Defensive Programming
// function divide(a, b) {

//     if (typeof a !== "number" || typeof b !== "number") {
//         throw new Error("Both values must be numbers");
//     }

//     if (b === 0) {
//         throw new Error("Cannot divide by zero");
//     }
//     return a / b;
// }
// console.log(divide(null, 5));


// class Student {
//     constructor(name, level) {
//         if (!name) {
//             throw new Error("Student name is required");
//         }
//         if (level < 100 || level > 500) {
//             throw new Error("Invalid student level");
//         }
//         this.name = name;
//         this.level = level;
//     }
// }
// const student = new Student("Eimmiit", 400);
// console.log(student)


// function checkAge(age){
//     if (age === NaN){
//         console.log('invalid')
//     } else{
//         console.log("nam")
//     }
// }
// checkAge(("aa"))

// Try, catch, finally
// try{
//     console.log('Start of the try');
//     unicycle;
//     console.log('End of try runs');
// } catch(err){
//     console.log('Error has occured: ' + err);
// } finally{
//     console.log('This is always run')
// }
// console.log('...Then the execution continues')

// let json = '{ "age": 30}'
// try{
//     let user = JSON.parse(json);
//     if(!user.name){
//         throw new SyntaxError('Incomplete data: no name');
//     }
//     console.log(user.name);
// }catch(e){
//     console.error("JSON Error: " + e);
// }finally{
//     console.log('This always execute')
// }


// Ecercise 1
// let age = 'wee'
// function checkAge(age){
//     if(isNaN(age)){
//         throw new Error('Age is not a number')
//     }
//     if(age < 0){
//         throw new Error('Age is invalid')
//     }
//     console.log('Valid age')
// }
// console.log(checkAge(age))

// Exercise 2
// try {
//     console.log(checkAge(-5));
// }
// catch (error) {
//     console.log(error.message);
// }
// console.log('...program continue')

// Prediction challenge
// A
// Boom
// ...program continue


// function test() {
//     console.log("A");
//     throw new Error("Boom");
//     console.log("B");
// }
// try {
//     test();
// }
// catch (error) {
//     console.log(error.message);
// }
// console.log("C");

// Debugging Challenge
// function withdraw(balance, amount) {
//     if (amount > balance) {
//         throw new Error("Insufficient balance");
//     }
//     return balance - amount;
// }
// try {
//     const result = withdraw(5000, 7000);
//     console.log(result);
// }catch(e){
//     console.log(e)
// }
// console.log("Transaction finished");

// Sophisticated Engineering Challenge
// class StudentWallet {
//     constructor(balance) {
//         this.balance = balance;
//     }
//     deposit(amount) {
//         if (amount <= 0) {
//             throw new Error('You cannot deposit an invalid amount')
//         }
//         return this.balance += amount;
//     }
//     withdraw(amount) {
//         if (amount <= 0) {
//             throw new Error('invalid amount to withdraw')
//         }
//         if (amount > this.balance) {
//             throw new Error('insuffient balance')
//         }
//         return this.balance -= amount
//     }
//     getBalance() {
//         return `Here is the available balance ${this.balance}`
//     }
// }
// let newStudentWallet = new StudentWallet(5000);
// console.log(newStudentWallet.deposit(1000));
// try {
//     console.log(newStudentWallet.withdraw(7000));
// }
// catch (error) {
//     console.log(error.message);
// }
// console.log(newStudentWallet.getBalance());

// function A() {
//     B();
// }

// function B() {
//     throw new Error("Boom");
// }

// try {
//     A();
// }
// catch (error) {
//     console.log(error.message);

// }


// Assynchronous javac=script & event loops
// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// console.log("C");


// function sayHello() {
//     console.log("Hello");
// }
// setTimeout(sayHello, 2000);


// setTimeout(() => {
//     console.log("B");
// }, 1000);

// for (let i = 0; i < 1000000; i++) {
//     console.log(i)
// }


// Exercises 1
// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 1000);

// console.log("C");

// setTimeout(() => {
//     console.log("D");
// }, 0);

// console.log("E");


// Exercise 2
// setTimeout(sayHello, 1000);
// setTimeout(sayHello(), 1000);
// The diffent is sayhello and sayhello(), sayhello literaly taking the whole function. while sayhello() is to return, so this is wrong

// Prediction
// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 0);
// setTimeout(() => {
//     console.log("3");
// }, 0);
// console.log("4");
// 1423
// both setTimeout run sychronously
// console.log("4") run asynchrononouly
// the first settimeout enter the queue first

// Debugging challenge
// because getData run before setTimeout finish count that why it bring undefine
// function getData() {
//     setTimeout(() => {
//         return "Data received";
//     }, 2000);

// }
// const data = getData();
// console.log(data);

// function completeTrans() {
//     setTimeout(() => {
//         console.log("Transaction complete");
//     }, 2000);
//     console.log("Transaction approved");
// }
// function processTransaction() {
//     console.log("Transaction started");
//     setTimeout(() => {
//         console.log("Updating balance...");
//     }, 2000);
//     console.log("Checking account...");
//     console.log("Transaction request sent");
//     completeTrans()

// }
// processTransaction();

// console.log("A");
// function test() {
//     console.log("B");
//     setTimeout(() => {
//         console.log("C");
//     }, 0);
//     console.log("D");
// }
// test();
// console.log("E");
// setTimeout(() => {
//     console.log("F");
// }, 0);
// console.log("G");


// Promises
// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 2000);
//     });
// }
// const data = getData();
// console.log(data);

// function getData(number) {
//     if (number > 1) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("Data received");
//             }, 2000);
//         });
//     }else{
//        return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject(new Error("Something went wrong"));
//             }, 2000);
//         }); 
//     }
// }
// getData = getData(0).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error.message)
// });
// console.log(getData)

// const promise = Promise.resolve(10);
// const nextPromise = promise.then((value) => {
//     return value * 2;
// });

// const burgerOrder = new Promise((resolve, reject) => {
//   let foodIsReady = true; 

//   if (foodIsReady) {
//     resolve("Here is your warm Burger! 🍔"); 
//   } else {
//     reject("Sorry, we burned the kitchen down. 🔥"); 
//   }
// });
// burgerOrder
//   .then((food) => {
//     console.log(food); 
//   })
//   .catch((error) => {
//     console.log(error); 
//   })
//   .finally(() => {
//     console.log("We are leaving the restaurant now.");
//   });

// const slow = new Promise((resolve) => {
//     setTimeout(() => resolve("Slow"), 3000);
// });
// const fast = new Promise((resolve) => {
//     setTimeout(() => resolve("Fast"), 10000);
// });
// Promise.race([slow, fast])
//     .then((result) => {
//         console.log(result);
//     });



// console.log("A");
// Promise.resolve().then(() => {
//     console.log("B");
// });
// console.log("C");
// Promise.resolve().then(() => {
//     console.log("D");
// });
// console.log("E");


// console.log("1");
// setTimeout(() => {
//     console.log("2");
// }, 0);
// Promise.resolve().then(() => {
//     console.log("3");
// });
// console.log("4");
// Promise.resolve().then(() => {
//     console.log("5");
// });
// setTimeout(() => {
//     console.log("6");
// }, 0);
// console.log("7");


// function getUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Eimmiit");
//         }, 1000);
//     });
// }
// const user = getUser().then((value)=>{
//     console.log(value)
// });
// console.log(user);


// Prediction challenge 1:
// A
// C
// E
// B
// D
// Prediction 2
// 1
// 4
// 7
// 3
// 5
// 2
// 6

// Debugging chalenge
// function getUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Eimmiit");
//         }, 1000);
//     });
// }
// const user = getUser().then((value) => {
//     console.log(value)
// });
// Engineering chalenge
// function getStudent() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 id: 1,
//                 name: "Eimmiit",
//                 department: "Computer Science"
//             });
//         }, 1000);
//     });
// }
// function getWallet() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 balance: 50000
//             });
//         }, 1500);
//     });
// }

// Promise.all([
//     getStudent(),
//     getWallet()
// ]).then((results)=>{
//     console.log(results)
// })

// Harder Challenge
// function getStudents() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["Eimmiit", "John", "David"]);
//         }, 1000);
//     });
// }
// function getCourses() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["JavaScript", "Database", "Networking"]);
//         }, 1500);
//     });
// }
// function getTransactions() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["₦5,000", "₦10,000", "₦2,500"]);
//         }, 800);
//     });
// }
// Promise.race([
//     getStudents(),
//     getCourses(),
//     getTransactions()
// ]).then((result)=>{
//     console.log((result))
// })





// const promise = Promise.resolve("Hello");
// console.log(promise);

// Promise.resolve("Hello")
//     .then((value) => {
//         console.log(value);
//     });

// const result = Promise.resolve(10)
//     .then((value) => {
//         return value * 2;
//     });
// console.log(result);

// const p = Promise.resolve(50);
// console.log(p);

// Promise.resolve(50)
//     .then((value) => {
//         console.log(value);
//     });

// const p = Promise.resolve(50)
// .then((value) => {
//     return value + 50;
// });
// console.log(p)

// const p = Promise.reject(50)
//     .then((value) => {
//         return value + 50;
//     }).catch((value)=>{
//         return 'invalid'
//     });

// p.then((value) => {
//     console.log(value);
// });


// Phase 3, lesson 3.9
// Async await & fetch
// async function processStudent() {
//     const user = await getUser();
//     const wallet = await getWallet(user.id);
//     const transactions = await getTransactions(wallet.id);
//     const balance = await calculateBalance(transactions);

//     console.log(balance);
// }
// console.log(processStudent())

// async
// async function hello() {
//     return "Hello";
// }
// console.log(hello())


// async function getNumber() {
//     return 10 + 2;
// }
// const result = getNumber();
// console.log(result);
// result.then((value)=>{
//     console.log(value)
// })


// return inside an async function
// async function getStudent(){
//     return "Eimmiit"
// }
// const student = getStudent()
// getStudent().then((student) => {
//     console.log(student);
// });

// await
// function getStudent() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Eimmiit");
//         }, 2000);
//     });
// };
// console.log(getStudent())
// getStudent().then((student) => {
//     console.log(student);
// });
// async function showStudent() {
//     const student = await getStudent();
//     console.log(student);
// }
// showStudent();

// example
// function getStudent() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Eimmiit");
//         }, 2000);
//     });
// };

// async function getStudentName() {
//     console.log("A");
//     const name = await getStudent();
//     console.log(name);
//     console.log("B");
// }
// console.log("Start");
// getStudentName();
// console.log("Finish");


// async function showStudent() {
//     try {
//         const student = await getStudent();
//         console.log(student);
//     }
//     catch (error) {
//         console.log(error.message);
//     }
// }

// fetch()
// const response = await fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );
// async function getProducts() {
//     const response = await fetch(
//         "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//     );
//     console.log(response);
// }
// getProducts();


// async function getProducts() {
//     try {
//         const response = await fetch(
//             "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//         );
//         if (!response.ok) {
//             throw new Error(`HTTP error: ${response.status}`);
//         }
//         console.log(response);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// getProducts();


// async function test() {
//     console.log("A");
//     await someAsyncOperation();
//     console.log("B");
// }
// console.log("Start");
// test();
// console.log("Finish");


// further more on promise
// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if(!error){
//         resolve('Yes! resolved the promise')
//     }else{
//         reject('No! reject the promise')
//     }
// })
// console.log(myPromise);
// myPromise.then(value => {
//     return value + 1
// }).then(newValue => {
//     console.log(newValue)
// }).catch(err => {
//     console.error(err)
// })

// another example
// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if(!error){
//         resolve('Yes! resolved the promise')
//     }else{
//         reject('No! reject the promise')
//     }
// })

// const myNewPromise = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         resolve('MyNextPromise resolved')
//     },3000)
// })

// myNewPromise.then(value =>{
//     console.log(value)
// })

// myPromise.then(value => {
//     console.log(value)
// })

// promise with fetch, pending
// const users = fetch('https://jsonplaceholder.typicode.com/users');
// console.log(users)

// const users = fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     return response.json()
// }).then(data => {
//     data.forEach(user => {
//         console.log(user.name);
//     });
// });

// async & await
// const myUsers = {
//     userList: [],
// }
// const myCoolFunction = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const jsonUserData = await response.json();
//     return jsonUserData;
// }
// myCoolFunction();

// const anotherFunc = async () =>{
//    const data = await myCoolFunction();
//     myUsers.userList = data
// }
// anotherFunc();
// console.log(myUsers.userList)

// Workflow function
// const getAllUsersEmail = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const jsonUserData = await response.json();

//     const userEmailArray = jsonUserData.map(user =>{
//         return user.email;
//     })

//     console.log(userEmailArray)
//     postToWebPage(userEmailArray)
// return userEmailArray;
// }
// getAllUsersEmail()
// const postToWebPage = (data) =>{
//     console.log(data)
// }
// getAllUsersEmail()


// 2nd paeameter of fetch is a Object
// getDadJoke = async () => {
//     const response = await fetch('https://icanhazdadjoke.com/', {
//         method: 'GET',
//         header: {
//             Accept: 'application/json'
//         }
//     });
//     const jsonJokeData = await response.json();
//     console.log(jsonJokeData)
// }
// getDadJoke();


// Exercise 1
// async function calculate() {
//     return 25;
// }
// const result = calculate();
// console.log(result);

// Exercise 2
// async function getName() {
//     const name = Promise.resolve("Eimmiit");
//     name.then(username => {
//         console.log(username)
//     });
// }
// getName()

// or

// async function getName() {
//     const name = await Promise.resolve("Eimmiit");

//     console.log(name);
// }

// prdiction challenge
// console.log("A");
// async function test() {
//     console.log("B");
//     await Promise.resolve();
//     console.log("C");
// }
// test();
// console.log("D");

// Prediction challenge 2
// console.log("1");
// async function test() {
//     console.log("2");
//     await Promise.resolve();
//     console.log("3");
// }
// test();
// setTimeout(() => {
//     console.log("4");
// }, 0);
// console.log("5");

// Debugging challenge
// async function getUser() {
//     const response = await fetch(
//         "https://example.com/user"
//     );
//     console.log(response.status);
// }
// getUser();


// engineering challenge
// student = {}
// async function getStudent() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            // if (response.ok === false) { or //if (!response.ok){}
            //     throw new Error(`HTTP error: ${response.status}`);
            // }
//         
//         const studentResponse = await response.json();
//         student.StudentNAme = studentResponse.name
//         student.StudentEmail = studentResponse.email

//         
//     } catch (error) {
//         console.log(error.message);
//     }
//     console.log(student)
// console.log(response.ok)
// console.log(studentResponse.name)
// console.log(studentResponse.email)
// }
// getStudent()


// async function getStudent() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     const studentResponse = await response.json();
//     return studentResponse
// }
// async function getPost() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
//     const postResponse = await response.json()
//     return postResponse
// }
// async function loadData() {
//     const [student, posts] = await Promise.all([
//         getStudent(),
//         getPost()
//     ]);
//     console.log(student);
//     console.log(posts);
// }
// loadData();


// Mine own ==== wrong
// const bigResult = Promise.all([getStudent(),
// getPost()]).then((result) => {
//     return result
// })
// function display({ student, post }) {
//     console.log(student)
//     console.log(post)
// }
// display(bigResult)
// Mine own ==== wrong

