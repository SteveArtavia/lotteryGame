let myNumber;
let winnerNumber;

let startScreen = document.getElementById('startScreen');
let startBtn = document.getElementById('startBtn');
let mainScreen = document.getElementById('mainScreen');
let numberInput = document.getElementById('numberInput');
let chooseBtn = document.getElementById('chooseBtn');
let resultScreen = document.getElementById('resultScreen');
let winNumber = document.getElementById('winNumber');
let numberChosen = document.getElementById('numberChosen');
let result = document.getElementById('result');
let reloadBtn = document.getElementById('reloadBtn');


function startGame() {
    startScreen.style.display = 'none';
    mainScreen.style.display = 'block'
}

startBtn.addEventListener('click', startGame);

function chooseMyNumber() {
    myNumber = numberInput.value;
    if ((myNumber === '') || (myNumber >= 100)) {
        alert('Please enter a number between 0-99');
        return;
    }

    numberChosen.innerHTML = 'Your number<br>' + myNumber;

    winnerNumber = Math.round(Math.random() * 100);
    winNumber.innerHTML = 'Winning number<br>' + winnerNumber;

    mainScreen.style.display = 'none';
    resultScreen.style.display = 'block';

    if(myNumber === winnerNumber){
        result.textContent = 'You have won $1 000 000!';
    } else {
        result.textContent = 'You lost, better luck next time'
    }
}

chooseBtn.addEventListener('click', chooseMyNumber);

function reloadGame(){
    location.reload();
}

reloadBtn.addEventListener('click', reloadGame);

