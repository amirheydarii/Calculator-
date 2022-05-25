
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


let buttons = document.querySelectorAll(".item3")

buttons.forEach((div) => {
    div.addEventListener("click", () => setDisplay(div , displayResult))
})


function setDisplay(number , displayResult) {
    let displayNum = displayResult.textContent
    displayResult.textContent = `${number.textContent}`
    displayResult.textContent = displayNum + `${number.textContent}`
    if (displayNum === "0") {
        resetDisplay(number, displayResult)
    }
    
}

function resetDisplay(number, displayResult) {
    displayResult.textContent = `${number.textContent}`
}








