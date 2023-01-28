const theBody = document.body
const calcButton = document.getElementById("cal")
const subtractButton = document.getElementById("subtracting")
const multiplyButton = document.getElementById("multiplying")
const divideButton = document.getElementById("dividing")
let buttonClicked = document.getElementById("button-clicked")


calcButton.addEventListener("click", function(){
    console.log("calcButton button has been clicked!")
    buttonClicked.innerHTML = `<div class="jc-center flex-parent">You clicked the calcButton button. Are you sure you want to continue?</div><br><div class="jc-center flex-parent"><button class="jc-center decision-yes" onclick="location.href='./pages/calculator.html'">YES</button><button class="jc-center decision-no" onclick="noButton()">NO</button></div>`
    calcButton.remove()
    subtractButton.remove()
    multiplyButton.remove()
    divideButton.remove()
    

})

subtractButton.addEventListener("click", function(){
    console.log("Subtraction button has been clicked!")
    buttonClicked.innerHTML = `<div class="jc-center flex-parent">You clicked the SUBTRACTION button. Are you sure you want to continue?</div><br><div class="jc-center flex-parent"><button class="jc-center decision-yes" onclick="location.href='./pages/subtraction.html'">YES</button><button class="jc-center decision-no" onclick="noButton()">NO</button></div>`
    calcButton.remove()
    subtractButton.remove()
    multiplyButton.remove()
    divideButton.remove()
    

})

multiplyButton.addEventListener("click", function(){
    console.log("Multiplication button has been clicked!")
    buttonClicked.innerHTML = `<div class="jc-center flex-parent">You clicked the MULTIPLICATION button. Are you sure you want to continue?</div><br><div class="jc-center flex-parent"><button class="jc-center decision-yes" onclick="location.href='./pages/multiplication.html'">YES</button><button class="jc-center decision-no" onclick="noButton()">NO</button></div>`
    calcButton.remove()
    subtractButton.remove()
    multiplyButton.remove()
    divideButton.remove()
    

})

divideButton.addEventListener("click", function(){
    console.log("Division button has been clicked!")
    buttonClicked.innerHTML = `<div class="jc-center flex-parent">You clicked the DIVISION button. Are you sure you want to continue?</div><br><div class="jc-center flex-parent"><button class="jc-center decision-yes" onclick="location.href='./pages/division.html'">YES</button><button class="jc-center decision-no" onclick="noButton()">NO</button></div>`
    calcButton.remove()
    subtractButton.remove()
    multiplyButton.remove()
    divideButton.remove()
    

})

function noButton() {
    location.reload()
}