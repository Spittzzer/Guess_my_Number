'use strict';
//elements targeting;
let checkBtn = document.querySelector('.check');
let againBtn = document.querySelector('.again');
let messageEl = document.querySelector('.message');
let numberEl = document.querySelector('.number');
let scoreEl = document.querySelector('.score');
let highscoreEl = document.querySelector('.highscore');
let guessEl = document.querySelector('.guess');

//logic

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let showMessage = function (message) {
  messageEl.textContent = message;
};

checkBtn.addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    showMessage('Please Enter a Number');
  } else if (guess === secretNumber) {
    showMessage('🎉 Correct Number!');
    numberEl.textContent = secretNumber;
    document.body.style.backgroundColor = 'green';
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      showMessage(
        guess > secretNumber ? '📉 Number is Lower' : '📈 Number is Higher'
      );

      score--;
      scoreEl.textContent = score;
    } else {
      showMessage('☹ You Lost..');
    }
  }
});

againBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '#222';
  score = 20;
  numberEl.textContent = '?';
  showMessage('Start guessing...');
  scoreEl.textContent = '0';
  guessEl.value = 0;
});
