let currentOperation;
let currentAnswer;
document.addEventListener("keypress", function(e) {
const userInput = document.getElementById('field').value;
 const userInputValue = parseInt(userInput);
     if (e.key === 'Enter') {
         console.log(currentAnswer);
          console.log(userInput);
          if (currentAnswer === userInputValue) {
            generateProblemByOperation(currentOperation);
            addPoints();
            reset();
        }
    }
});
function generateHeaderByOperation(operation) {
    if (operation === "addition") {
        let title = 'Addition';
        document.getElementById('new-header').textContent = '';
    }
    if (operation === "subtraction") {
        let title = 'Subtraction';
        document.getElementById('new-header').textContent = '';
    }
    if (operation === "division") {
        let title = 'Division';
        document.getElementById('new-header').textContent = '';
    }
    if (operation === "multiplication") {
        let title = 'Multiplication';
        document.getElementById('new-header').textContent = '';
    }
}
function generateProblemByOperation(operation) {
    if (operation === "addition") {
        addProblems();
    }
    if (operation === "subtraction") {
        subProblems();
    }
    if (operation === "division") {
        divProblems();
    }
    if (operation === "multiplication") {
        multiProblems();
    }
}
document.getElementById("operation").addEventListener('change', function () {
        const select = document.getElementById("operation");
        currentOperation = select.value;
        generateProblemByOperation(currentOperation);
    });
document.getElementById('go').addEventListener('click', function() {
    const field = document.getElementById("field");
    const select = document.getElementById("operation");
    currentOperation = select.value;
    document.getElementById("high-score").textContent = "";
    generateHeaderByOperation(currentOperation);
    startTimer();
    showHideDiv();
    field.focus();
});
function addProblems() {
    let number = Math.floor(Math.random() * 10) + 1;
    let number2 = Math.floor(Math.random() * 10) + 1;
    let problem = `What is ${number} + ${number2}`;
    let sum = number + number2;
    currentAnswer = sum;
    document.getElementById('math-question').textContent = problem;
}
function divProblems() {
    let a, b;
    do {
        a = Math.floor(Math.random() * 100) + 1;
        b = Math.floor(Math.random() * 100) + 1;
    } while (Math.floor(a / b) = a / b);
    let problem = `${a} / ${b}`;
    let quotient = a / b;
    currentAnswer = quotient;
    document.getElementById('math-question').textContent = problem;
}
function multiProblems() {
    let number = Math.floor(Math.random() * 10) + 1;
    let number2 = Math.floor(Math.random() * 10) + 1;
    let problem = `${number} * ${number2}`;
    let sum = number * number2;
    currentAnswer = sum;
    document.getElementById('math-question').textContent = problem;
}
function subProblems() {
    let number = Math.floor(Math.random() * 20) + 1;
    let number2 = Math.floor(Math.random() * number) + 1;
    let problem = `${number} - ${number}`;
    let difference = number - number2;
    currentAnswer = difference;
    document.getElementById('math-question').textContent = problem;
}
function startTimer() {
let counter = 30;
let timer = setInterval(function() {
    document.getElementById("time-left").textContent = counter;
    counter--;
    if(counter == -1) {
        clearInterval(timer);
        gameOver();
        playAgain();
      }
   }, 1000);
}
function writeNumber(e) {
    const field = document.getElementById("field");
    let number = e.currentTarget.value;
    field.value = field.value + number;
    field.focus();
}
const buttons = document.querySelectorAll(".btn");
for (const button of buttons) {
    button.addEventListener("click", writeNumber);
}
function reset() {
    const inputValue = document.getElementById("field");
    inputValue.value = "";
}
let score = 0;
function addPoints() {
    score++;
    document.getElementById("score").textContent = `${score}`;
}
let playAgainBtn;
function gameOver() {
    document.getElementById("numpad").style.display = "none";
    document.getElementById("game-over-div").style.display = "block";
    document.getElementById("high-score").textContent = `Your final score is ${score}`;
}
function showHideDiv() {
    document.getElementById("numpad").style.display = "block";
    document.getElementById("select-menu").style.display = "none";
}
function clearHeader() {
    document.getElementById("new-header").textContent = "";
}
function resetScore() {
    score = 0;
    document.getElementById("score").textContent = `${score}`;
}
function playAgain() {
    document.getElementById("play-again-btn").addEventListener("click", function() {
    document.getElementById("select-menu").style.display = "block";
    document.getElementById("game-over-div").style.display = "none";
    clearHeader();
    let highScore = document.getElementById("score");
    resetScore(highScore);
    });
}
window.addEventListener('load', function() {
    const numPad = document.getElementById('numpad');
    const button = document.getElementsByClassName('num');
    const operation = document.getElementById('math-facts1');
});