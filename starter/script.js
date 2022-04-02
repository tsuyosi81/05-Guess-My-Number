'use strict';

// NOTE DOM(Document Object Model): Structure representation of HTML documents. Allows JavaScript to Acce4ss HTML Elements and Styles to manipulate them.

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // NOTE When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';

        // NOTE When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';

        // NOTE When guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }

        // NOTE When guess is too low
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('.score').textContent = 0;
    }
});