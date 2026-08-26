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

// Phase 2, lesson 2.4
// forEach()
// let names = ['ade', 'bola', 'comfort', 'dayo'];
// names.forEach(function(name, index, originalArray){
//     console.log(index, name, originalArray);
// })

// map()
// let prices = [1000, 2000, 3000];
// let increasedPrices = prices.map(function(price){
//     return price + 500
// })
// console.log(prices, increasedPrices)

// filter()
// let numbers = [10, 25, 40, 5, 60];
// let result = numbers.filter(function(number){
//     return number % 2 === 0;
// });
// console.log(result);

// the three method together
// let products = [
//     {name: 'laptop', price: 300000},
//     {name: 'mouse', price: 18000},
//     {name: 'monitor', price: 150000},
//     {name: 'keyboard', price: 25000}
// ]

// products.forEach(function(product){
//     console.log(product.name);
// });

// let name = products.map(function(product){
//     return product.name;
// });
// console.log(name);

// let expensiveProducts = products.filter(function(product){
//     return product.price > 100000;
// })
// console.log(expensiveProducts)


// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// console.log(myFunc());


// Exercise 1
// let names = ["Eimmiit", "John", "Sarah", "David"];
// names.forEach(function(name){
//     console.log(`Student: ${name}`);
// })

// Exercise 2
// let numbers = [2, 4, 6, 8, 10];
// let newNumbers = numbers.map(function(number){
//     return number * 2;
// })
// console.log(newNumbers)

// Exercise 3
// let ages = [12, 18, 25, 15, 30, 16, 22];
// let olderAges = ages.filter(function(age){
//     return age >= 18;
// })
// console.log(olderAges)

// Exercise 4, 5
// let students = [
//     { name: "Eimmiit", score: 85 },
//     { name: "John", score: 45 },
//     { name: "Sarah", score: 72 },
//     { name: "David", score: 38 }
// ];
// let passedStudent = students.filter(function(student){
//     return student.score >= 50
// })
// let studentNames = students.map(function(student){
//     return student.name;
// })
// console.log(passedStudent)
// console.log(studentNames)

// Engineering challenge
// let products = [
//     { id: 1, name: "Laptop", price: 300000, stock: 5 },
//     { id: 2, name: "Mouse", price: 18000, stock: 12 },
//     { id: 3, name: "Keyboard", price: 25000, stock: 0 },
//     { id: 4, name: "Monitor", price: 150000, stock: 3 },
//     { id: 5, name: "USB Cable", price: 5000, stock: 20 }
// ];

// products.forEach(function(product){
//     console.log(`${product.name} - ₦${product.price}`);
// });
// let productsName = products.map(function(product){
//     return product.name;
// })
// console.log(productsName)
// let productsInStock = products.filter(function(product){
//     return product.stock > 0;
// })
// console.log(productsInStock)
// let costlyProducts = products.filter(function(product){
//     return product.price > 100000;
// })
// console.log(costlyProducts);
// let productsDiscount = products.map(function(product){
//     let discountOfPrice = product.price * 0.1;
//     return product.price - discountOfPrice;
// })
// console.log(productsDiscount)

// Prediction Challenge
// A
// [3,6,9]
// B
// [10,15,20]
// C
// [2,4,6] //getting undefine running
// D
// object // undefine also after running

// Debugging challeng
// let prices = [1000, 2000, 3000];

// let discountedPrices = prices.map(function(price) {
//     return price * 0.9;
// });

// console.log(discountedPrices);

// more exercise
// let students = [
//     { name: "Eimmiit", age: 22, score: 85 },
//     { name: "John", age: 17, score: 45 },
//     { name: "Sarah", age: 21, score: 72 },
//     { name: "David", age: 16, score: 90 }
// ];

// let olderStudents = students.filter(function(student){
//     return student.age >= 18;
// })

// let olderStudentsName = olderStudents.map(function(student){
//     return student.name;
// })

// let allStudentDoubled = students.map(function(student){
//     return student.score * 2;
// })

// let olderStudentsAndHighGrade = students.filter(function(student){
//     return student.age >= 18 && student.score >= 70
// })

// console.log(olderStudents)
// console.log(olderStudentsName)
// console.log(allStudentDoubled)
// console.log(olderStudentsAndHighGrade)


// Phase 2, 2.5
// reduce ()
// let numbers = [10, 20, 30, 40];

// let total = numbers.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);

// console.log(total);
// let students = [
//     { name: "Eimmiit", score: 85 },
//     { name: "John", score: 45 },
//     { name: "Sarah", score: 72 },
//     { name: "David", score: 38 }
// ];
// let passedCount = students.reduce(function(count, student) {
//     if (student.score >= 50) {
//         return count + 1;
//     }
//     return count;
// }, 0);
// console.log(passedCount);

// Exercise 1
// let numbers = [10, 20, 30, 40, 50];
// let total = numbers.reduce(function(initial, number){
//     return number + initial;
// }, 0)
// console.log(total)

// Exercise 2
// let products = [
//     { name: "Laptop", price: 300000 },
//     { name: "Mouse", price: 18000 },
//     { name: "Keyboard", price: 25000 },
//     { name: "Monitor", price: 150000 }
// ];
// let totalPrice = products.reduce(function(initial, product){
//     return product.price + initial;
// }, 0)
// console.log(totalPrice)

// Exercise 3
// let people = [
//     { name: "Eimmiit", age: 22 },
//     { name: "John", age: 17 },
//     { name: "Sarah", age: 25 },
//     { name: "David", age: 15 },
//     { name: "Mike", age: 30 }
// ];

// let ageUp = people.reduce(function(count, person){
//     if (person.age >= 18){
//         return count + 1;
//     }
//     return count;
// }, 0);
// console.log(ageUp)

// Exercise 4
// let carts = [
//     { name: "Laptop", price: 300000, quantity: 1 },
//     { name: "Mouse", price: 18000, quantity: 2 },
//     { name: "Keyboard", price: 25000, quantity: 1 }
// ];
// let cartTotal = carts.reduce(function(count, cart){
//     let priceCalc = cart.price * cart.quantity;
//     return priceCalc + count;
// },0)
// console.log(cartTotal)


// Engineering challeng
// let students = [
//     { name: "Eimmiit", score: 85 },
//     { name: "John", score: 45 },
//     { name: "Sarah", score: 72 },
//     { name: "David", score: 38 },
//     { name: "Mike", score: 91 }
// ];
// let totalScore = students.reduce(function(initial, student){
//     return student.score + initial
// },0)

// function getAverage(allNumber){
//     averageNum = 0
//     for(let i = 0; i < allNumber.length; i++){
//         averageNum += allNumber[i].score;
//     }
//     return averageNum / allNumber.length;
// }

// let passCount = students.reduce(function(count, student){
//     if(student.score >= 50){
//         return count + 1;
//     }
//     return count
// }, 0)

// let failCount = students.reduce(function(count, student){
//     if(student.score < 50){
//         return count + 1;
//     }
//     return count;
// },0);

// let highestNum = students.reduce(function(count, student){
//     if(count < student.score){
//         count = student.score;
//     }
//     return count;
// }, 0)

// let lowestNum = students.reduce(function(count, student){
//     if(student.score < count){
//         return student.score;
//     }
//     return count;

// }, students[0].score);

// console.log(getAverage(students))
// console.log(totalScore)
// console.log(passCount)
// console.log(failCount)
// console.log(highestNum)
// console.log(lowestNum)

// mini challenge on reduce()
// let numbers = [45, 12, 89, 34, 7, 92, 21];
// let totalNumber = numbers.reduce(function(total, number){
//     return number + total
// }, 0);

// let averageNum = totalNumber / numbers.length

// let passedNum = numbers.reduce(function(passed, number){
//     if (number >= 50){
//         return passed + 1;
//     }
//     return passed;
// }, 0);

// let FailedNum = numbers.reduce(function(passed, number){
//     if (number < 50){
//         return passed + 1;
//     }
//     return passed;
// }, 0);

// let HighestNum = numbers.reduce(function(highest, number){
//     if(highest < number){
//         highest = number;
//     }
//     return highest;
// },0);

// let lowestNum = numbers.reduce(function(lowest, number){
//     if(number < lowest){
//         return number;
//     }
//     return lowest;
// }, numbers[0]);

// console.log(totalNumber);
// console.log(averageNum);
// console.log(HighestNum);
// console.log(lowestNum);
// console.log(passedNum);
// console.log(FailedNum);



// Phase 2, 2.6
// Exercise 1 & 2
// let products = [
//     { id: 101, name: "Laptop", price: 300000 },
//     { id: 102, name: "Mouse", price: 18000 },
//     { id: 103, name: "Keyboard", price: 25000 },
//     { id: 104, name: "Monitor", price: 150000 }
// ];
// let productFind = products.find(function (product) {
//     return product.id === 103;
// });
// let productIndex = products.findIndex(function (product) {
//     return product.name === 'Monitor'
// })

// console.log(productFind);
// console.log(productIndex);


// Exercise 3
// let scores = [35, 42, 67, 79, 55];
// let scoreSome = scores.some(function (score) {
//     return score > 70;
// });
// console.log(scoreSome);

// Exercise 4
// let ages = [20, 17, 19, 30, 22];
// let ageEvery = ages.every(function (age) {
//     return age >= 18;
// })
// console.log(ageEvery)

// Exercise 5
// let programmingLanguages = [
//     "JavaScript",
//     "Python",
//     "Java",
//     "C++",
//     "Go"
// ];
// let language = programmingLanguages.includes('Python');
// let unkLang = programmingLanguages.includes('Rust');
// console.log(language);
// console.log(unkLang);


// Engineering Chalenge - Student management Search System
// let students = [
//     {
//         id: 1,
//         name: "Eimmiit",
//         age: 22,
//         department: "Computer Science",
//         score: 85
//     },
//     {
//         id: 2,
//         name: "John",
//         age: 17,
//         department: "Accounting",
//         score: 45
//     },
//     {
//         id: 3,
//         name: "Sarah",
//         age: 21,
//         department: "Computer Science",
//         score: 72
//     },
//     {
//         id: 4,
//         name: "David",
//         age: 19,
//         department: "Engineering",
//         score: 90
//     }
// ];

// function findStudentById(students, id) {
//     let findStudentById = students.find(function (student) {
//         return student.id === id;
//     })
//     console.log(findStudentById);
// }
// function findStudentIndex(students, id) {
//     let findStudentPosition = students.findIndex(function (student) {
//         return student.id === id;
//     })
//     console.log(findStudentPosition);
// };
// function hasPassedStudent(students) {
//     let studentHasPassed = students.some(function (student) {
//         return student.score >= 50;
//     })
//     console.log(studentHasPassed);
// }
// function everyonePassed(students) {
//     let everyStudentHasPassed = students.every(function (student) {
//         return student.score >= 50;
//     });
//     console.log(everyStudentHasPassed);
// }
// function hasDepartment(students, department) {
//     let studentDepartment = students.some(function (student) {
//         return student.department === department;
//     })
//     console.log(studentDepartment);
    // console.log(students.includes(`{department: ${department}}`))
// }
// let findsAllComp = students.filter(function (student) {
//     return student.department === 'Computer Science';
// })
// let findfirstStudentHighScore = students.find(function (student) {
//     return student.score >= 80;
// })
// let findfirstStudentHighScore = students.filter(function (student) {
//     return student.score >= 80;
// })[0]

// findStudentById(students, 4);
// findStudentIndex(students, 3);
// hasPassedStudent(students);
// everyonePassed(students);
// hasDepartment(students, "Computer cience");
// console.log(findsAllComp);
// console.log(findfirstStudentHighScore);