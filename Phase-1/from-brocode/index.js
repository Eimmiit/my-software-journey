// console.log('Hello');
// console.log('I like pzza');

// window.alert('Hello');
// window.alert('I like pzza');

// document.getElementById('myH1').textContent = 'HELLO WORLD';

// Rest and spread
// let numbers = [1,2,3,4,5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(maximum, minimum);

// let username = "Eimmiit";
// let letters = [...username].join("");
// console.log(letters);

// Example
// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }
// function getAverage(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result/numbers.length;

// }
// const total = getAverage(75, 100, 85, 90, 50);
// console.log(total)


// Example
// const numbers = [75, 100, 85, 90, 50]

// function sum(numbers){
//     let result = 0;
//     for(let i = 0; i < numbers.length; i++){
//         result += numbers[i];
//     }
//     return result;
// }
// function getAverage(total, numbers){
// let result = 0;
// for(let number of numbers){
//     result += number;
// }

// return total/numbers.length;

// }
// const total = sum(numbers);
// const average = getAverage(total, numbers);
// console.log(average)


// Example
// function combineString(...strings){
//     return strings.join(' ')
//     return strings
// }
// const combine = combineString('mr', 'tim', 'is', 'a', 'banker');
// console.log(combine);

//ForEacch
// let fruits = ['apple', 'banana', 'orange'];

// fruits.forEach(upperCase);
// fruits.forEach(display);

// function display(element){
//     console.log(element);
// }
// fruits.forEach(function(fruit){
//     console.log(fruit);
// })

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }
//  function display(element){
//     console.log(element);
// }

// function touperCase(fruit){
//     console.log(fruit.toUpperCase())
// }
// fruits.forEach(touperCase);

// callback with forEach()
// let fruits = ['apple', 'banana', 'orange'];

//  fruits.forEach(function(fruit){
//     console.log(fruit.toUpperCase());
// })

// fruits.forEach(upperCase);
// fruits.forEach(display)

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// };
// function lowerCase(element, index, array){
//     array[index] = element.toLowerCase();
// };
// function display(element){
//     console.log(element);
// }


// .Map()
// const numbers = [1,2,3,4,5];

// console.log(numbers.map(square));
// function square(element){
//     return element + 2;
// }

// const squares = numbers.map(square);
// function square(element){
//     return Math.pow(element, 2);
// }
// console.log(squares)


// const students = ['timilehin','michael', 'eimmiit', 'orimisan', 'adesewa'];

// console.log(students.map(upperCase));
// function upperCase(element){
//     return element.toUpperCase();
// }


// manipulating using split
// let week = 'tre-ww-ert';
// week = week.split('-');
// let combine = `${week[2]}/${week[1]}/${week[0]}`
// console.log(combine);
// console.log(week);


// Filter()
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// console.log(numbers.filter(isEven))

// function isEven(element){
//     return element % 2 === 0;
// }


// Reduce ()
// const prices = [5, 30, 10, 25, 15, 20];

// function sum(accumulator, element){
//     return accumulator + element;
// }
// console.log(prices.reduce(sum).toFixed(2));


// function expression
// const hello = function(){
//     console.log('hello')
// }
// hello();

// example
// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const sqr = numbers.map(function(element){
//     return Math.pow(element, 2);
// })
// console.log(sqr);


// Arrow function
// const hello = (name) => {
//     console.log('hello ' + name);
// }
// hello('eim')

// Example
// const peeps = [1,2,3,4,5];
// let isEven = peeps.filter((peep) => peep % 2 === 0)
// let timesTwo = peeps.map((peep) => peep * 2)
// console.log(isEven)
// console.log(timesTwo)


// Objects
// with function
// const people = {
//     sayHello: (name) => ('hello'),
// }
// console.log(people.sayHello('Eim'))

// this,... keyword
// const person1 = {
//     name: 'Spongebob',
//     faveFood: 'harmburger',
//     sayHello: function(){
//         console.log(`hello ${this.name}`)
//     }
// }
// person1.sayHello()
// console.log(this)