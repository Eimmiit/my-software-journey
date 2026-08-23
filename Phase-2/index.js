// Phase 2, Lesson 2.1
// Exercise 1
// function celsiusToFahrenheit(celsius) {
//     let C = celsius;
//     return (C * 9 / 5) + 32
// }
// console.log(celsiusToFahrenheit(0))
// console.log(celsiusToFahrenheit(25))
// console.log(celsiusToFahrenheit(100))

// Exercise 2
// function findMaximum(a, b, c) {
//     let listOfNumber = [a, b, c];
//     let maxNum = listOfNumber[0];
//     for (let i = 0; i < listOfNumber.length; i++) {
//         if (listOfNumber[i] > maxNum) {
//             maxNum = listOfNumber[i];
//         }
//     }
//     return maxNum;
// }
// console.log(findMaximum(-10, 20, 5));
// console.log(findMaximum(100, -50, 75));


// Exercise 3
// function isValidPassword(password) {
//     if (password.length >= 8) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isValidPassword('password'));

// Exercise 4
// let cart = [
//     { name: "Laptop", price: 300000 },
//     { name: "Mouse", price: 18000 },
//     { name: "Keyboard", price: 25000 }
// ];

// function calculateCartTotal(cart) {
//     let cartCalc = 0;
//     for (let i = 0; i < cart.length; i++) {
//         cartCalc += cart[i].price;
//     }
//     return cartCalc;
// }
// function calculateOrderTotal(cart, disscount){
//     return cart * disscount;
// }


// console.log(calculateCartTotal(cart))
// console.log(calculateOrderTotal(calculateCartTotal(cart), 0.10))

// Exercise 5
// function calculateSubTotal(priceAmount) {
//     return priceAmount;
// }
// function calculateDiscount(subtotal, discount) {
//     return subtotal * discount;
// }
// function calculateFinalPrice(price, discountR) {
//     let subtotal = calculateSubTotal(price);
//     let discountAfter = calculateDiscount(subtotal, discountR);
//     return subtotal - discountAfter;
// }

// let price = 100000;
// let discountPrice = 0.1;

// console.log(calculateFinalPrice(price, discountPrice))


// Engineering challenge - refactor this
// let balance = 0;
// let moneyAdded = 50000;
// let priceTag = 40000;

// function buyProduct(price) {
//     if (balance > price) {
//         balance -= price;
//         console.log("Purchase successful");
//         console.log("Remaining balance:", balance);
//     } else if (balance === price) {
//         console.log("Purchase successful, You have no change left")
//     } else {
//         console.log("Insufficient funds");
//     }
// }

// function addMoney(amount) {
//     balance += amount;
//     console.log("Money added");
//     console.log("New balance:", balance);
// }

// addMoney(moneyAdded);
// buyProduct(priceTag);


// Harder Challenge
// let numbers = [45, 12, 89, -34, 7, 92, 21];

// function findHighestNum(numberToCheck) {
//     let highestNum = 0;
//     for (let i = 0; i < numberToCheck.length; i++) {
//         if (numberToCheck[i] > highestNum) {
//             highestNum = numberToCheck[i];
//         }
//     }
//     return highestNum;
// }

// function findLowestNum(numberToCheck) {
//     let lowestNum = findHighestNum(numberToCheck);
//     for (let i = 0; i < numberToCheck.length; i++) {
//         if (numberToCheck[i] < lowestNum) {
//             lowestNum = numberToCheck[i];
//         }
//     }
//     return lowestNum
// }

// function findTotalNum(numberToCheck) {
//     let totalNum = 0;
//     for (let i = 0; i < numberToCheck.length; i++) {
//         totalNum += numberToCheck[i];
//     }
//     return totalNum;
// }

// function findTheAverage(numberToCheck) {
//     let totalNum = findTotalNum(numberToCheck);
//     let average = totalNum / numberToCheck.length
//     return average;
// }

// function analyzeNumbers(numbers) {
//     console.log(findTotalNum(numbers))
//     console.log(findLowestNum(numbers))
//     console.log(findHighestNum(numbers))
//     console.log(findTheAverage(numbers))
// }

// analyzeNumbers(numbers);



// phase 2, lesson 2.2
// Test your understanding
// A: 10, 20
// B: you get an error, x is not declare
// C: John, Eimmiit
// D: 30, 20
// E: 15

// Coding Practice
// Exercise 1
// Because username is a global variable

// Exercise 2
// It fail because price is not declare as global varible
// function calculateTotal() {
//     let price = 5000;
//     return price;
// }
// console.log(calculateTotal());

// Exercise 3
// let name = 'Eimmiit';
// function nameFunc(){
//     let name = 'john';
//     console.log(name);
// }
// console.log(name)
// nameFunc();

// Engineering challenge
// let balance = 50000;
// function deposit(depo) {
//     balance += depo;
//     return balance;
// }
// function withdraw(withd) {
//     balance -= withd;
//     return balance
// }
// function checkBalance() {
//     console.log(balance);
// }
// deposit(20000)
// withdraw(10000)
// checkBalance();

// console.log(balance)


// Harder Challenge
// let scores = [70, 85, 90, 65, 80];
// let name = 'eimmiit';

// function analyzeStudent(name, scores) {


//     function calculateTotal(scoreList) {
//         let scoresTotal = 0;
//         for (let i = 0; i < scoreList.length; i++) {
//             scoresTotal += scoreList[i];
//         }
//         return scoresTotal;
//     }
//     function calculateAverage(totalScore, scoreList) {
//         return totalScore / scoreList.length;
//     }
//     function calculateHighest(scoreList) {
//         let highestScore = scoreList[0];
//         for (let i = 0; i < scoreList.length; i++) {
//             if (scoreList[i] > highestScore) {
//                 highestScore = scoreList[i]
//             }
//         }
//         return highestScore;
//     }
//     function calculateLowest(scoreList) {
//         let lowestScore = scoreList[0];
//         for (let i = 0; i < scoreList.length; i++) {
//             if (scoreList[i] < lowestScore) {
//                 lowestScore = scores[i]
//             }
//         }
//         return lowestScore;
//     }

//     let grade;


//     let overall = {};
//     overall.studentName = name;
//     overall.total = calculateTotal(scores);
//     overall.average = calculateAverage(calculateTotal(scores), scores);

//     if (overall.average > 50){
//         grade = 'A';
//     }else{
//         grade = 'F';
//     }

//     overall.highest = calculateHighest(scores);
//     overall.lowest = calculateLowest(scores);
//     overall.grade = grade;

//     return overall;
// }
// console.log(analyzeStudent(name, scores))


// extra harder challenge
// let balance = 50000;

// function createBankAccount(mainBalance) {
//     return mainBalance;
// }
// function deposit(moneyBefore, amountTodeposit) {
//     let overallAmount = moneyBefore + amountTodeposit;
//     return overallAmount;
// }
// function withdraw(moneyBefore, amountToWithdraw) {
//     let overallAmount = moneyBefore - amountToWithdraw;
//     return overallAmount;

// }
// function checkBalance(balanceOverall) {
//     return balanceOverall;
// }

// console.log(createBankAccount(balance))
// console.log(deposit(createBankAccount(balance),20000));
// console.log(withdraw(createBankAccount(balance), 10000));
// console.log(checkBalance(createBankAccount(balance)))




// Just an Example
// function isValidPassword(password) {
//     if (password.length < 8) {
//         return false;
//     }
//     let hasNumber = false;
//     for (let i = 0; i < password.length; i++) {
//         if (Number.isInteger(Number(password[i]))) {
//             hasNumber = true;
//             break;
//         }
//     }
//     return hasNumber;
// }
// console.log(isValidPassword("hello"));
// console.log(isValidPassword("hello123"));
// console.log(isValidPassword("Eimmiit"));
// console.log(isValidPassword("Eimmiit123"));

// Another Example
// function createBankAccount(initialBalance) {
//     let balance = initialBalance;
//     function deposit(amount) {
//         if (amount <= 0) {
//             return "Deposit amount must be greater than 0";
//         }
//         balance += amount;
//         return balance;
//     }
//     function withdraw(amount) {
//         if (amount <= 0) {
//             return "Withdrawal amount must be greater than 0";
//         }

//         if (amount > balance) {
//             return "Insufficient funds";
//         }
//         balance -= amount;
//         return balance;
//     }
//     function checkBalance() {
//         return balance;
//     }
//     return {
//         deposit,
//         withdraw,
//         checkBalance
//     };
// }

// let account = createBankAccount(50000);
// console.log(account.checkBalance());
// console.log(account.deposit(20000));
// console.log(account.withdraw(10000));
// console.log(account.checkBalance());



// phase 2, lesson 2.3
// Exercise 1
// let names = ["Eimmiit", "John", "Sarah", "David"];
// function findName(names, name){
//     for (let i = 0; i < names.length; i++){
//         if(names[i] === name){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(findName(names, "Eimmiit"))
// Exercise 2,3,4
// let students = [
//     { id: 1, name: "Eimmiit", age: 22 },
//     { id: 2, name: "John", age: 25 },
//     { id: 3, name: "Sarah", age: 21 }
// ];
// function findStudentsById(students, id){
//     for(let i = 0; i < students.length; i++){
//         if(students[i].id === id){
//             return students[i];
//         }
//     }
//     return null;
// }
// function updateStudentAge(students, id, newAge){
//     for(let i = 0; i < students.length; i++){
//         if(students[i].id === id){
//             students[i].age = newAge;
//             return students[i];
//         }
//     }
// }
// function deleteStudent(students, id){
//     for(let i = 0; i < students.length; i++){
//         if(students[i].id === id){
//             students.splice(i, 1);
//         }
//     }
//     return students;
// }
// console.log(findStudentsById(students, 1))
// console.log(updateStudentAge(students, 2, 30))
// console.log(deleteStudent(students, 2))


// Engineering challenge, and harder challenge
// let products = [
//     {
//         id: 101,
//         name: "Laptop",
//         price: 300000,
//         stock: 5
//     },
//     {
//         id: 102,
//         name: "Mouse",
//         price: 18000,
//         stock: 10
//     },
//     {
//         id: 103,
//         name: "Keyboard",
//         price: 25000,
//         stock: 7
//     }
// ];
// function findProduct(products, id) {
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].id === id) {
//             return products[i];
//         }
//     }
//     return null;
// }
// function updateStock(products, id, newStock) {
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].id === id) {
//             products[i].stock += newStock
//             return products[i];
//         }
//     }
//     return null;
// }
// function buyProduct(products, id, quantity) {
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].id === id) {
//             if (products[i].stock > quantity) {
//                 products[i].stock -= quantity;
//                 return 'you just get what you want';
//             } else {
//                 return 'Not enough stock to cover your quantity';
//             }
//         }
//     }
//     return null;
// }
// function deleteProduct(products, id){
//     for(let i = 0; i < products.length; i++){
//         if(products[i].id === id){
//             products.splice(i, 1);
//             return 'product deleted successfully';
//         }
//     }
//     return 'Products not found';
// }
// function getTotalInventoryValue(products){
//     let productOverallPrice = {}
    
//     for(let i = 0; i < products.length; i++){
//         let total = products[i].price * products[i].stock;
//         productOverallPrice[products[i].name] = total
//     }
//     return productOverallPrice;
// }
// console.log(findProduct(products, 103))
// console.log(updateStock(products, 103, 20))
// console.log(buyProduct(products, 103, 4))
// console.log(deleteProduct(products, 101))
// console.log(getTotalInventoryValue(products))