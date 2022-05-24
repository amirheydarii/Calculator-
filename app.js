let display = document.querySelector(".display");
let displayResult = document.querySelector('.display-result')
let clearbtn = document.querySelector(".clear");
let deletebtn = document.querySelector(".delete");
let remainder = document.querySelector(".remainde");
let multiplier = document.querySelector(".multiplier");
let divider = document.querySelector(".divider");
let total = document.querySelector(".total");
let subtractor = document.querySelector(".subtraction");
let equal = document.querySelector(".equal");
let dot = document.querySelector(".dot");
let number0 = document.querySelector(".zero");
let number1 = document.querySelector(".one");
let numbre2 = document.querySelector(".two");
let number3 = document.querySelector(".three");
let number4 = document.querySelector(".four");
let number5 = document.querySelector(".five");
let number6 = document.querySelector(".sixe");
let number7 = document.querySelector(".seven");
let number8 = document.querySelector(".eight");
let number9 = document.querySelector(".nine");


number1.addEventListener('click', () => setDisplay(number1 , displayResult))
number0.addEventListener('click', () => setDisplay(number0 , displayResult))



function setDisplay(number , displayResult) {
    displayResult.innerHTML = `${number.textContent}`
}

