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
function combineString(...strings){
    return strings.join(' ')
    return strings
}
const combine = combineString('mr', 'tim', 'is', 'a', 'banker');
console.log(combine);