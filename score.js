var initialInput = document.querySelector("#inputInitials2");
var submitButton = document.querySelector("#submit");
var highscoreSection = document.querySelector("highscore-list");
var highscoreSpan = document.querySelector("#highscores");
var goBackButton = document.querySelector("#go-back");
var clearButton = document.querySelector("#clear");
var allDone = document.querySelector("#all-done");

function renderInitials() {

}

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  var initialText = initialInput.value.trim();
  if (initialText !== "") {
    return highscoreSpan.textContent = initialText;
  }
 
  initialInput.value = "";
});

submitButton.addEventListener('click', highscores);


function highscores() {
  console.log('highscores');
  allDone.classList.add('hide');
  highscoreSection.classList.remove('hide');
  
  renderInitials();
};