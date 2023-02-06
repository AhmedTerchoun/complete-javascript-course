'use strict';

let secretNumber = Math.floor(Math.random() * 21);
let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    //when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number';
        displayMessage('No Number');
    }

    //when the guess is correct
    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        // document.querySelector('.message').textContent = 'Correct Number';
        displayMessage('Correct Number');
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        //when the guess is incorrect
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            // guess < secretNumber ? 'Too Low' : 'Too High';
            displayMessage(guess < secretNumber ? 'Too Low' : 'Too High');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'Game Over';
            displayMessage('Game Over');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.floor(Math.random() * 21);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start Guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});