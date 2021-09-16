window.onload = function() {
    document.getElementById("cardRed").style.display = "none";
    document.getElementById("cardBlue").style.display = "none";
    document.getElementById("cardGreen").style.display = "none";
    document.getElementById("cardBrown").style.display = "none";
}

const compChoiceDisplay = document.getElementById('comp-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let compChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateCompChoice()
    getResult()
}))

function generateCompChoice() {
    const randomNumber = Math.floor(Math.random() * 4) + 1
    
    if (randomNumber === 1) {
        document.getElementById("cardBlack").style.display = "none";
        document.getElementById("cardBlue").style.display = "none";
        document.getElementById("cardGreen").style.display = "none";
        document.getElementById("cardBrown").style.display = "none";
        var displayRed = document.getElementById("cardRed");
        if (displayRed.style.display === "none") {
            displayRed.style.display = "block";
        } else if (displayRed.style.display === "block"){ 
            displayRed.style.display = "block";
        } else {
            displayRed.style.display = "none";
        }
        compChoice = 'red'
    }
    if (randomNumber === 2) {
        document.getElementById("cardBlack").style.display = "none";
        document.getElementById("cardRed").style.display = "none";
        document.getElementById("cardGreen").style.display = "none";
        document.getElementById("cardBrown").style.display = "none";
        var displayBlue = document.getElementById("cardBlue");
        if (displayBlue.style.display === "none") {
            displayBlue.style.display = "block";
        } else if (displayBlue.style.display === "block"){ 
            displayBlue.style.display = "block";
        } else {
            displayBlue.style.display = "none";
        }
        compChoice = 'blue'
    }
    if (randomNumber === 3) {
        document.getElementById("cardBlack").style.display = "none";
        document.getElementById("cardRed").style.display = "none";
        document.getElementById("cardBlue").style.display = "none";
        document.getElementById("cardBrown").style.display = "none";
        var displayGreen = document.getElementById("cardGreen");
        if (displayGreen.style.display === "none") {
            displayGreen.style.display = "block";
        } else if (displayGreen.style.display === "block"){ 
            displayGreen.style.display = "block";
        } else {
            displayGreen.style.display = "none";
        }
        compChoice = 'green'
    }
    if (randomNumber === 4) {
        document.getElementById("cardBlack").style.display = "none";
        document.getElementById("cardRed").style.display = "none";
        document.getElementById("cardBlue").style.display = "none";
        document.getElementById("cardGreen").style.display = "none";
        var displayBrown = document.getElementById("cardBrown");
        if (displayBrown.style.display === "none") {
            displayBrown.style.display = "block";
        } else if (displayBrown.style.display === "block"){ 
            displayBrown.style.display = "block";
        } else {
            displayBrown.style.display = "none";
        }
        compChoice = 'brown'
    }
    compChoiceDisplay.innerHTML = compChoice
    }

    function getResult() {
    if (compChoice === userChoice) {
        result = 'You did not win, it was a draw!'
    }
    else if (compChoice === 'red' && userChoice === "green") {
        result = 'you lost!'
    }
    else if (compChoice === 'green' && userChoice === "brown") {
        result = 'you lost!'
    }
    else if (compChoice === 'brown' && userChoice === "blue") {
        result = 'you lost!'
    }
    else if (compChoice === 'blue' && userChoice === "red") {
        result = 'you lost!'
    }
    else if (compChoice === 'red' && userChoice === "blue") {
        result = 'you win!'
    }
    else if (compChoice === 'blue' && userChoice === "brown") {
        result = 'you win!'
    }
    else if (compChoice === 'brown' && userChoice === "green") {
        result = 'you win!'
    }
    else if (compChoice === 'green' && userChoice === "red") {
        result = 'you win!'
    } else {
        result = 'You did not win, it was a draw!'
    }
    resultDisplay.innerHTML = result
}
