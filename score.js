// var initialInput = document.querySelector("#inputInitials2");
// var submitButton = document.querySelector("#submit");
// var highscoreSection = document.querySelector("highscore-list");
var highscoreLi = document.querySelector("#highscores");
var goBackButton = document.querySelector("#go-back");
var clearButton = document.querySelector("#clear");
var startQuiz = document.getElementById("#start-quiz");
var newHighscore = document.querySelector("#new-highscore");
// var allDone = document.querySelector("#all-done");
// var finalScore = document.querySelector("final-score");


function startQuiz() {
  window.location.assign(href="index.html");
}

goBackButton.addEventListener('click', startQuiz);

function goBack(){
  goBackButton.addEventListener('click', function(event) {
    event.preventDefault();
})
};

var highscoreLi = document.querySelector("#new-highscore").lastChild

// goBack()
// startQuiz()



// use this code to workout the clearing high scores
// clearEl.addEventListener('click', function(event) {
//   event.preventDefault();
//   textAreaEl.value = '';
//   elements.forEach(function(element) {
//     element.textContent = '';
//   });
// });
