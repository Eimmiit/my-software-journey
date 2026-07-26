// console.log('Hello World');

// let name = prompt('What is your name oh dearie?');
// alert("hello " + name);
// console.log(name);


// let userName = prompt("what is your Username");
// console.log(`Welcome ${userName}`);

// let favProgram = prompt("what is your favourite programming language");
// console.log("Your favourite programming language is " + favProgram);

// let firstNum = Number(prompt('come up with the first number'));
// let secondNum = Number(prompt('come up with the second number'));
// console.log(firstNum + secondNum);
// console.log(firstNum - secondNum);
// console.log(firstNum * secondNum);
// console.log(firstNum ** secondNum);

// let name = prompt("what is your name dear");
// let age = Number(prompt("how old are you darling"));
// let country = prompt("what country are you based in");
// console.log(`My name is ${name}, I am ${age} years old and i live in ${country}`);

// let birthYear = Number(prompt('What is your birth year'));
// const currentYear = 2026;
// let age = currentYear - birthYear;
// console.log(age);

// // Engineering challenge
// let fullName = prompt('what is your full name');
// let age = Number(prompt('age'));
// let department = prompt('please enter your department');
// let level = prompt('what level are you');
// let cgpa = Number(prompt("what's is your cgpa"));
// console.log(`====Student Registration Program.==== \n Name: ${fullName} \n Age: ${age} \n Department: ${department} \n Level: ${level} \n CGPA: ${cgpa}`); 


// Phase 1, lesson 1.6
// let accessAllowed;
// let age = prompt('How old are you?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);

// let recipee = "jollof rice";
// let food = (recipee == "jollof rice") ? 
//     true : false;
//     alert(food);

// let age = prompt('age?', 20);
// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';
// alert( message );


// let food = "Jollof rice";

// switch (food){
//     case "banana":
//         console.log("you get it wrong");
//         break;
//     case "Jollof rice":
//         console.log("you get it right");
//         break;
//     default:
//         console.log("ion know");
// }



// const Animal = "Giraffe";
// switch (Animal) {
//   case "Cow":
//   case "Giraffe":
//   case "Dog":
//   case "Pig":
//     console.log("This animal is not extinct.");
//     break;
//   case "Dinosaur":
//   default:
//     console.log("This animal is extinct.");
// }


// const foo = 1;
// let output = "Output: ";
// switch (foo) {
//   case 0:
//     output += "So ";
//   case 1:
//     output += "What ";
//     output += "Is ";
//   case 2:
//     output += "Your ";
//   case 3:
//     output += "Name";
//   case 4:
//     output += "?";
//     console.log(output);
//     break;
//   case 5:
//     output += "!";
//     console.log(output);
//     break;
//   default:
//     console.log("Please pick a number from 0 to 5!");
// }



// coding practice
// exercise 1
// let userName = Number(prompt("What is your age"));
// if (userName >= 18){
//     console.log("You can vote");
// }else{
//     console.log("you are to young to vote");
// }

// // exercise 2
// let userScore = Number(prompt("what is your score"));
// if (userScore >= 70){
//     console.log("A");
// }else if(userScore >= 60 && userScore <= 69){
//     console.log("B");
// }else if(userScore >= 50 && userScore <= 59){
//     console.log("C");
// }else{
//     console.log("F")
// }


// // exercise 3
// let userFirstNum = Number(prompt("please input your first number"));
// let userSecondNum = Number(prompt("please input your second number"));
// if (userFirstNum > userSecondNum){
//     console.log("the first number is larger");
// }else{
//     console.log("the second number is larger or equal");
// }


// // exercise 4
// let userChoiceOfDay = prompt("What day do you choose");
// switch(userChoiceOfDay){
//     case "monday":
//         console.log("It monday, get to work");
//         break;
//     case "tuesday":
//         console.log("It tuesday, grap some coffee");
//         break;
//     case "wednesday":
//         console.log("It wednesday, leave a note");
//         break;
//     case "thursday":
//         console.log("It thursday, have some fun");
//         break;
//     case "friday":
//         console.log("It friday, enjoy yourself");
//         break;
//     case "saturday":
//         console.log("It saturday, weekend again");
//         break;
//     case "sunday":
//         console.log("It sunday, go to church");
//         break;
//     default:
//         console.log("A wonderful day ahead")
// }


// // exercise 5
// const savedUsername = "admin";
// const savedPassword = "12345";

// let usernameInput = prompt("name to signup");
// let userPasswordInput = prompt("password to signup");

// if (savedUsername === usernameInput && savedPassword === userPasswordInput){
//     console.log("Login successfully");
// }else{
//     console.log("invalid username or password");
// }


// Engineering challenge
// let name = prompt("what is you name");
// let age = Number(prompt("how old are you"));
// let jambScore = Number(prompt("what is your jamb score"));
// let waecCredit = Number(prompt("what your credit in waec"));

// 
// 


// 


// lesson 1.7
// for(let i = 1; i <= 10; i = i + 1){
//   console.log('Hello');
// }
// for(let i = 1; i <= 10; i++){
//   console.log(i);
// }


// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }


// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }


// let i = 1;

// do {
//     console.log(i);
//     i++;
// }
// while (i <= 5);


// let i = 100;

// do {
//     console.log(i);
// }
// while (i < 10);

// exercise 1
// for(let i = 1; i <= 10; i++){
//   console.log(i)
// }

// xercise 2
// for(let i = 10; i >= 1; i--){
//   console.log(i);
// }

// excercise 3
// for(let i = 2; i <= 20; i += 2){
//   console.log(i);
// }
// or
// for(let i = 2; i <= 20; i++){
//   if(i % 2 === 0){
//     console.log(i);
//   }
// }

// exercise 4
// for loop
// let userInput = Number(prompt("what is the number you need to get the mutiplication table"));
// for(let i = 1; i <= 12; i++){
//   console.log(`${userInput} x ${i} = ${userInput * i}`);
// };

// while loop
// let userInput = Number(prompt("what is the number you need to get the mutiplication table"));
// let i = 1;
// while(i <= 12){
//   console.log(`${userInput} x ${i} = ${userInput * i}`);
//   i++;
// }


// exercise 5
// while loop
// let i = 1;
// while(i <= 50){
//   if(i % 5 === 0){
//     continue;
//   }
//   i++;
//   console.log(i);
// }

// for loop
// for (let i = 1; i <= 50; i++) {
//   if (i % 5 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// Engineering challenge
// ask for the subject number
// let userSubjectNum = Number(prompt("how many subject did you do"));
// let total = 0;
// let average = '';
// let highestScore = '';
// let lowestScore = 0;
// loop through and getting each score
// for(let i = 1; i <= userSubjectNum; i++){
//   let userScore = Number(prompt(`what is subject ${i} score`))
//   console.log(`subject ${i} = ${userScore}`);

//   total += userScore;
//   if(highestScore < userScore){
//     highestScore = userScore;
//   }

//   if(lowestScore === 0){
//     lowestScore = userScore;
//   }

//   if(lowestScore >= userScore){ //10,6,76,23,5
//     lowestScore = userScore;
//   }
// }

// console.log("Total :" + total);
// console.log("Average: " + (total/userSubjectNum));
// console.log("Highest Score: " + highestScore);
// console.log("Lowest Score: " + lowestScore);


// Number Guessing Game
// let secretNumber = 7;

// let guessGuess = true;

// while(guessGuess){
//   let numberGuessFromUser = Number(prompt("Guess the number"));
//   if(numberGuessFromUser === secretNumber){
//     console.log('You guess it right')
//     guessGuess = false;
//   }else if(numberGuessFromUser > secretNumber){
//     console.log('Number to higher, can you guess more lower')
//   }else if(numberGuessFromUser < secretNumber){
//     console.log("Number too low, can you guess more higher")
//   }
// }

// Star Pyramid
// let starPyramid = '';
// for(i = 1; i <= 5; i++){
//   starPyramid += "*";
//   console.log(starPyramid);
// }


// let starPyramid = '*****';
// for(i = 1; i <= 5; i++){
//   starPyramid = starPyramid.slice(-1);
//   console.log(starPyramid);
// };
// console.log(starPyramid)


// Functions

// function dumpProps(obj, objName) {
//   let result = "";
//   for (const i in obj) {
//     result += `${objName}.${i} = ${obj[i]}<br>`;
//   }
//   result += "<hr>";
//   return result;
// }

// let userName = 'John';

// function showMessage() {
//   userName = "Bob";
//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// alert( userName ); 
// showMessage();
// alert( userName );


// function showMessage(from, text) {
//   alert(from + ': ' + text);
// }
// showMessage('Ann', 'Hello!'); 
// showMessage('Ann', "What's up?");


// exercise 1
// function sayHello(){
//     console.log("Hello world");
// }
// sayHello();

// // exercise 2
// function greetUser(name){
//     console.log('Welcome ' + name);
// };
// greetUser('Eimmiit');

// exercise 3
// function addNumber(a,b){
//     numberSum = a + b;
//     return numberSum;
// };
// addition = addNumber(4, 6);
// console.log(addition)

// exercise 4
// function findSquare(number){
//     numberSquare = number ** 2;
//     return numberSquare;
// }
// squares = findSquare(8);
// console.log(squares);

// exercise 5
// let userAge = Number(prompt("what is your age"));
// function isAdult(age){
//     if(age === 18){
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log(isAdult(userAge));


// Engineering Challenge
// let studentName = 'Eimmiit';
// let studentScoreNumber = 4; 

// function totalScores(score) {
//     let totalScore = 0;
//     for(let i = 1; i <= score; i++){
//         let userScore = Number(prompt(`what is subject ${i} score`));
//         totalScore += userScore;
//     }
//     return totalScore;
    
// }

// function calculateAverage(totScore, scoreNum){
//     averageScore = totScore/scoreNum;
//     return averageScore;
// };

// function calculateGrade(score) {
//     if (score >= 70) {
//         grade = 'A';
//         return grade;
//     }else if(score <= 69 && score >= 60){
//         grade = "B";
//         return grade;
//     }else if(score <= 59 && score >= 50){
//         grade = "C";
//         return grade;
//     }
// }

// function displayReport(student,score,average,grade){
//     console.log('Student: ' + student)
//     console.log('Score: ' + score)
//     console.log('Average: ' + average)
//     console.log('Grade: ' + grade)

// }

// let overallScore = totalScores(studentScoreNumber);
// let overallAve = calculateAverage(overallScore, studentScoreNumber);
// let gradeOverAll = calculateGrade(overallScore);

// displayReport(studentName,overallScore,overallAve,gradeOverAll)

// mentor challenge
// let userCalc = prompt('What type of calculation did you want to use');
// let firstParam = Number(prompt("your first number"));
// let secondParam = Number(prompt("your second number"));

// function add(a, b){
//     let addition = a + b;
//     return addition;
// }
// function subtract(a, b){
//     let subtraction = a - b;
//     return subtraction;

// }
// function multiply(a, b){
//     let multiplication = a * b;
//     return multiplication;
// }
// function divide(a, b){
//     let division = a / b;
//     return division;
// }
// if(userCalc === 'add'){
//     console.log(add(firstParam,secondParam));
//     calculates = false;
// }else if(userCalc === 'subtract'){
//     console.log(subtract(firstParam,secondParam));
//     calculates = false;
// }else if(userCalc === 'multiply'){
//     console.log(multiply(firstParam,secondParam));
//     calculates = false;
// }else if(userCalc === 'divide'){
//     console.log(divide(firstParam,secondParam));
//     calculates = false;
// }


// let balance = 1000;
// function deposit(amount){
//     balance+= amount;
//     return balance;
// }
// function withdraw(amount){
//     balance-=amount;
//     return balance;
// }
// function checkbalance(){
//     console.log("Total amount: " + balance);
// }

// console.log(deposit(2000))
// console.log(withdraw(500))
// checkbalance()

// let option = prompt("What option are you choosing: withdraw, deposit, balance").toLowerCase();
// let balance = 5000;

// function deposit(amount){
//     balance+= amount;
//     return balance;
// }
// function withdraw(amount){
//     if(amount > balance){
//         return "issufficient funds"
//     } else{
//         balance-=amount;
//         return balance;
//     }
// }
// function checkBalance(){
//     console.log("Total amount: " + balance);
// }

// if(option === 'withdraw'){
//     let moneyToWithdraw = 1000;
//     console.log(withdraw(moneyToWithdraw));
// }else if(option === 'deposit'){
//     let moneyToDeposit = 1000;
//     console.log(deposit(moneyToDeposit));
// }else if(option === 'balance'){
//     checkBalance();
// }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

// lesson 1.9

// let fruits = ['apple','orange','banana'];
// console.log(fruits.length)
// console.log(fruits[0]);
// console.log(fruits[1]);
// fruits[1] = 'pawpaw';
// console.log(fruits[1]);
// console.log(fruits[2]);
// for(let i = 1;i <= fruits.length; i++){
//     console.log(fruits[i-1]);
// }


// exercise 1
// let programmingLanguage = ['python','javascript','java','C++','C'];
// console.log(programmingLanguage[0])
// console.log(programmingLanguage[4])

// exercise 2
// let listOfNumber = [23,11,21,34,55];
// console.log(listOfNumber.length)

// exercise 3
// let codeArray = ["HTML","CSS"];
// codeArray.push("Javasript","React");
// console.log(codeArray)

// exercise 4
// let colors = ['red', 'blue', 'green'];
// console.log(colors);
// colors[1] = 'black';
// console.log(colors);

// exercise 5
// let favFoods = ['garri','beans','rice','yam','potatoe'];
// for (food in favFoods){
//   console.log(favFoods[food])
// }

// let favFoods = ['garri','beans','rice','yam','potatoe'];
// for(let i = 0; i < favFoods.length; i++){
//   console.log(favFoods[i])
// }



// engineering challenge
// let student = [];
// let studentCount = Number(prompt("how many student did you want to add"));
// for(let i = 1; i <= studentCount; i++){
//   let studentName = prompt("what is the name of the student " + i);
//   student.push(studentName);
// }

// console.log("======= Student List =======")
// for(let i = 0; i < student.length; i++){
//   console.log(`${i + 1}. ${student[i]}`);
// }
// console.log('Total students: ' + student.length); 


// mentor challenge
// let cart = [];
// let goAgain = true;

// function addToCart(){
//   let numberOfProducts = Number(prompt('how many products did you want to add'))
//   for(let i = 1; i <= numberOfProducts; i++){
//     let productsToAdd = prompt('Please add your products')
//     cart.push(productsToAdd);
//   }
// };

// function productsDisplay(){
//   console.log('here are the list of all products')
//   for(let i = 0; i < cart.length; i++){
//     console.log(cart[i]);
//   }
// };

// function showTotal(){
//   console.log('The total number in the cart is ' + cart.length)
// };

// function checkProducts(products){
//   let cartInc = cart.includes(products);
//   return cartInc;
// }

// while (goAgain){
//   let userPick = Number(prompt('Welcome, press 1 to add to cart, 2 to display all product,3 to show total number of items,4 to check a specific products,5 to quit'));
    
//   if(userPick === 1){
//     addToCart();
//   }else if(userPick === 2){
//     productsDisplay()
//   }else if(userPick === 3){
//     showTotal();
//   }else if(userPick === 4){
//     let productToCheck = prompt('what products do you intend to check');
//     console.log(checkProducts(productToCheck));
//   }else if(userPick === 5){
//     goAgain = false;
//   }
// }


// let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
// arr[3]();

// let fruits = ["Apple", "Orange", "Plum"];
// alert( fruits.at(-1) );

// let user = new Array();
// user.push('food','rice','beans');
// console.log(user)
// user.unshift({name:'foode'}, function(){console.log('hello')})
// console.log(user)
// user[1]();

// Javascript object
// let user = new Object();
// console.log(user);
// let key = 'food';
// user.food = 'rice';
// console.log(user)
// user.age = 19;
// console.log(user)

// let codes = {
//   "49": "Germany",
//   "41": "Switzerland",
//   "44": "Great Britain",
//   "1": "USA"
// };

// for (let code in codes) {
//   alert(code); 
//   alert(codes[code]);
// }

// coding practice
// exercise 1
// let students = {
//   name: 'Eimmiit',
//   age: 22,
//   Department: 'Computer Science',
//   level: 400,
// };
// console.log(students);

// //exercise 2
// let phone = {
//   brand: 'Samsung',
//   model: 's26',
//   price: 50000,
// };
// phone['price'] = 45000;
// console.log(phone); 
// phone.price = 60000;
// console.log(phone);

// // exercise 3
// let book = {
//   Title: 'The Journey of Life',
//   Author: 'Eimmit Mich'
// };
// book['Year'] = 2006;
// book.Genre = 'fiction';
// console.log(book)

// // exercise 4
// let person = {
//   age: 22,
// };
// delete person.age;
// console.log(person)

// // exercise 5
// let cars = {
//     brand: "Toyota",
//     year: 2022,
//     color: "White"
// }

// for(car in cars){
//   console.log(car + ' - ' + cars[car]);
// }


// // Engineering challenge
// let student = {}
// let studentName = prompt('what is your name');
// let studentAge = Number(prompt('How olds are you'));
// let studentDept = prompt('What department are you');
// let studentLevel = prompt('What level are you');
// let StudentCGPA = prompt('what is your cgpa');

// student.name = studentName;
// student.age = studentAge;
// student.department = studentDept;
// student.level = studentLevel;
// student.cgpa = StudentCGPA;

// function displayStudents(student){
//   console.log('Students record')
//   for(studentAttr in student){
//     console.log(`${studentAttr}: ${student[studentAttr]}`)
//   }
// }

// displayStudents(student);

