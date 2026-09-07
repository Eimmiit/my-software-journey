// Temperature Conversion Program

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;


function convert() {
    if (toFahrenheit.checked) {
        // result.textContent = "Select a Fahrenheit";
        temp = Number(textBox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + " Fahrenheit";

    } else if (toCelcius.checked) {
        // result.textContent = "Select a Celcius";
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + " Celcius";
    } else {
        result.textContent = "Select a unit";
    }
}