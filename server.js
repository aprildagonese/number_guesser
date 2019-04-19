const guessForm = document.querySelector('.guess-form')
const guessBox = document.querySelector('.guess-box')
const guessButton = document.querySelector('.guess-button')
const clearButton = document.querySelector('.clear-button')
const guess = document.querySelector('.guess')
const result = document.querySelector('#result')
const resetButton = document.querySelector('#reset-button')
const secretNumber = Math.floor(Math.random() * 100) + 1;

guessButton.addEventListener('click', clicked);
resetButton.addEventListener('click', reset);
guessForm.addEventListener('submit', function (event) {
  event.preventDefault();
});

function clicked() {
  var inputValue = parseInt(guessBox.value);
  document.getElementById("info-text").innerHTML = "Your last guess was:";
  document.getElementById("guess").innerHTML = inputValue;
  if (inputValue > secretNumber) {
    document.getElementById("result").innerHTML = "That is too high.";
  } else if ( inputValue < secretNumber) {
    document.getElementById("result").innerHTML = "That is too low.";
  } else {
    document.getElementById("result").innerHTML = "That is correct! You win!";
  }
}

function reset() {
  location.reload(true);
}6