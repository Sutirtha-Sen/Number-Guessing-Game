let randomN=(parseInt(Math.random()*100+1));

const submit=document.querySelector('#subt');
const input=document.querySelector('#guessField');
const guesses=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');


let prevGuess= [];
let attempts= 1;
let playGame= true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess=parseInt(input.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess<1){
        alert('Please enter a number more than 1');
    }
    else if(guess>100){
        alert('Please enter a number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(attempts===10){
            displayGuess(guess);
            displayMessage(`Game over, the random number is ${randomN}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess===randomN){
        displayMessage(`You won! the random number is ${randomN}`);
        endGame();
    }
    else if(guess<randomN){
        displayMessage('Too low');
    }
    else if(guess>randomN){
        displayMessage('Too High');
    }
}
function displayGuess(guess){
    input.value='';
    guesses.innerHTML+=`${guess}  `;
    attempts++;
    remaining.innerHTML=`${10-attempts}`;
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}
function endGame(){
    input.value='';
    input.setAttribute('disabled', '');
    p.classList.add('button');  
    p.innerHTML=`<h2 id="newgame">Start a new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();  
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
      randomN = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      attempts = 1;
      guesses.innerHTML = '';
      remaining.innerHTML = `${11 - attempts} `;
      input.removeAttribute('disabled');
      startOver.removeChild(p);
      playGame = true;
    });
}