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

function outer() {
    console.log("A");

    middle();

    console.log("B");
}

function middle() {
    console.log("C");

    inner();

    console.log("D");
}

function inner() {
    console.log("E");
}

outer();

console.log("F");