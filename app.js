
let displayResult = document.querySelector('.display-result')
let clearbtn = document.querySelector(".clear");
let deletebtn = document.querySelector(".delete");
let remainder = document.querySelector(".remainde");
let multiplier = document.querySelector(".multiplier");
let divider = document.querySelector(".divider");
let total = document.querySelector(".total");
let subtractor = document.querySelector(".subtraction");
let equal = document.querySelector(".equal");
let point = document.querySelector(".item4")
let buttons = document.querySelectorAll(".item3")


buttons.forEach((div) => {
    div.addEventListener("click", () => setDisplay(div))
})
point.addEventListener('click' , () => setPoint())
deletebtn.addEventListener('click' , () => setDelete())
clearbtn.addEventListener('click' , () => setClear())





function setDisplay(number) {
    resetDisplay()
    displayResult.textContent += `${number.textContent}`

}

function resetDisplay() {
    
    if (displayResult.textContent === "0") {
        displayResult.textContent = ""
    }
}

let falseValue = false

function setPoint() {
     if (displayResult.textContent.includes(".")) return
     if (displayResult.textContent === "") {
        displayResult.textContent = "0"
     }
     displayResult.textContent += "."
}

function setDelete() {
    displayResult.textContent = "0"
}

function setClear() {
     displayResult.textContent = displayResult.textContent
     .toString()
     .slice(0 , -1) 
}



