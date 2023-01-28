const buttonTag = document.getElementById("buttonT") 
const buttonP = document.getElementById("buttonPrint")
const headerTags = document.getElementById("headTag") 
let paraText = document.getElementById("paragraph")
const textArea = document.getElementById("txtArea")
let nameOfPerson = "Aman Benbi"
let activities= []

buttonTag.addEventListener("click", function() {
headerTags.innerHTML = `Hello, my name is ${nameOfPerson}`
console.log(textArea.value)
let hobbies = textArea.value
activities.push(hobbies)
console.log(activities)
})

buttonP.addEventListener("click" ,function() {
    for (let i=0; i<activities.length; i++){
        paraText.innerHTML += `\nHobby ${i}: ${activities[i]} \n`
    }
    
})

function func() {
    console.log("button Clicked!!!!")
}

func()