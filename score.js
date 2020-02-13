var initialInput = document.querySelector("#inputInitials2");
var submitButton = document.querySelector("#submit");
var highscoreSpan = document.querySelector("#highscores");
var goBackButton = document.querySelector("#go-back");
var clearButton = document.querySelector("#clear");

function renderInitials() {

}

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  var initialText = initialInput.value.trim();
console.log(initialText);
  if (initialText !== "") {
    return highscoresSpan.textContent = initialText;
  }
  // initialInput.push(initialText);
  initialInput.value = "";
});

submitButton.addEventListener('click', highscores);


function highscores() {
  console.log('highscores');
  submitButton.classList.add('hide');
  highscoreSpan.classList.remove('hide');
  
  renderInitials();
};