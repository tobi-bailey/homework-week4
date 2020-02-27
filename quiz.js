var points = 0;  
var highScores = [];


var currentQuestionIndex = 0;

const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choiceA: "string",
        choiceB: "boolean",
        choiceC: "alert",
        choiceD: "number",
        correct: "C"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____:",
        choiceA: "quotations",
        choiceB: "curly brackets",
        choiceC: "parentheses",
        choiceD: "square brackets",
        correct: "B"
    },
    {
        question: "Arrays in JavaScript can be used to store ____:",
        choiceA: "numbers and strings",
        choiceB: "other arrays",
        choiceC: "booleans",
        choiceD: "all of the above",
        correct: "D"
    },
    { //
        question: "String values must be encolsed within ___ when being assigned to variables:",
        choiceA: "commas",
        choiceB: "curly brackets",
        choiceC: "quotes",
        choiceD: "parentheses",
        correct: "C"
    }
  ];

var startButton = document.getElementById('start-quiz');
var questionContainer = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerButtonElement = document.getElementById ('answer-buttons');
var submissionResponseEl = document.getElementById('right-wrong');
var scorePage = document.getElementById('score-page');

var initialInput = document.querySelector("#inputInitials2");
var submitButton = document.querySelector("#submit");
var highscoreSection = document.querySelector("highscore-list");
var highscoreSpan = document.querySelector("#highscores");
var goBackButton = document.querySelector("#go-back");
var clearButton = document.querySelector("#clear");
var allDone = document.querySelector("#all-done");
var finalScore = document.querySelector("#final-score");
var newHighscore = document.querySelector("new-highscore");

// answers
var choiceAEl = document.getElementById("A");
choiceAEl.addEventListener('click', answerQuestion);
var choiceBEl = document.getElementById("B");
choiceBEl.addEventListener('click', answerQuestion);
var choiceCEl = document.getElementById("C");
choiceCEl.addEventListener('click', answerQuestion);
var choiceDEl = document.getElementById("D");
choiceDEl.addEventListener('click', answerQuestion);

startButton.addEventListener('click', startQuiz);


function loadScorePage() {
  questionContainer.classList.add('hide');
  scorePage.classList.remove('hide');
};

function setNextQuestion(){
  if(currentQuestionIndex < questions.length){
    var nextQuestion = questions[currentQuestionIndex];
    questionEl.innerHTML = nextQuestion.question;
    choiceAEl.innerHTML = nextQuestion.choiceA;
    choiceBEl.innerHTML = nextQuestion.choiceB;
    choiceCEl.innerHTML = nextQuestion.choiceC;
    choiceDEl.innerHTML = nextQuestion.choiceD;
  }
  else{
    choiceAEl.addEventListener('click', loadScorePage);
    choiceBEl.addEventListener('click', loadScorePage);
    choiceCEl.addEventListener('click', loadScorePage);
    choiceDEl.addEventListener('click', loadScorePage);
  }
};

function answerQuestion(event){
  var actualAnswer = event.target.id;
  var question = questions[currentQuestionIndex];
  var correctAnswer = questions[currentQuestionIndex].correct;
  if(actualAnswer === correctAnswer){
    points+=5;
      var correctResponse = "Right!";
      submissionResponseEl.textContent = correctResponse;
  }
  else
  {
    var incorrectResponse = "Wrong!";
    submissionResponseEl.textContent = incorrectResponse;

  }

  var response = "Your final score is " + points + ".";
    finalScore.textContent = response;

  console.log(points)

  currentQuestionIndex++;
  setNextQuestion();
}

function startQuiz() {
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    setNextQuestion();
};

var index = questions.findIndex(function(question){
    return question
});



function renderInitials() {

}

function renderInitials() {

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  var initialText = document.querySelector("#inputInitials2").value.trim();

  // var initialText = initialInput.value.trim();
  if (initialText !== "") {
    return newHighscore.textContent = initialText;
  }
 
  initialInput.value = "";
});

}
renderInitials();

function highscorePage() {
  window.location.assign(href="score.html");
}

submitButton.addEventListener('click', highscorePage);

console.log(event)

// issues, score isn't working
// initial aren't appending :(
// go back
// clear high scores
