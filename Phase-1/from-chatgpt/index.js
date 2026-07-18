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
let name = prompt("what is you name");
let age = Number(prompt("how old are you"));
let jambScore = Number(prompt("what is your jamb score"));
let waecCredit = Number(prompt("what your credit in waec"));

// 
let qualified = true;

if (age < 16) {
    console.log("Age must be at least 16.");
    qualified = false;
}

if (jambScore < 180) {
    console.log("JAMB score must be at least 180.");
    qualified = false;
}

if (waecCredit < 5) {
    console.log("WAEC credits must be at least 5.");
    qualified = false;
}

if (qualified) {
    console.log("Congratulations! You qualify for admission.");
}