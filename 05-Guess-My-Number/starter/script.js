'use strict';

const secretNumber = Math.floor(Math.random() * 21);
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        console.log('Number Detected');
    }
    if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('.highscore').textContent = score;
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too Low';
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high';
        score--;
        document.querySelector('.score').textContent = score;
    }
});