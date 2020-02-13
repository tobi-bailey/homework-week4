// const is a good choice!

var points = 0;  // stores the points accumalated.
var highScores = [];

// highScore.push({
//   userInitials: 'CK',
//   score:points
// });
// points = 0;

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
  window.location.assign(href="score.html");
}

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

  // wait for users answer.
}

function answerQuestion(event){
  var actualAnswer = event.target.id;
  var question = questions[currentQuestionIndex];
  var correctAnswer = question.correct;
  if(actualAnswer == correctAnswer){
    points++;
  }
  console.log(points);

  currentQuestionIndex++;
  setNextQuestion();
}


function startQuiz() {
    console.log('Started');
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    setNextQuestion();
};


// find index returns the index in the array which matches
// the given expression.
var index = questions.findIndex(function(question){
    return question
});
