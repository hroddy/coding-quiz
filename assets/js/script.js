var begin = document.getElementById("begin");
var title = document.getElementById("title");
var desc = document.getElementById("desc");
var rules = document.getElementById("rules");
var choices = document.getElementById("choices");
var questionWords = document.getElementById("questionWords");
var answerA = document.getElementById("a");
var answerB = document.getElementById("b");
var answerC = document.getElementById("c");
var answerD = document.getElementById("d");
var interval;

var scoreEl = document.getElementById("scoreEl");
var scoreElPush = document.getElementById("scoreElPush");
var highScore = document.getElementById("highScore");
var highScoreArray =
  JSON.parse(localStorage.getItem("submittedHighScore")) || [];
var highScore1 = document.getElementById("highScore1");
var highScore2 = document.getElementById("highScore2");
var highScore3 = document.getElementById("highScore3");
var yourInitals = document.getElementById("yourInitals");
var intialContainer = document.getElementById("intialContainer");
var submit = document.getElementById("submit");
var backButton = document.getElementById("backButton");

var time;
var score = 0;
var timerWords = document.getElementById("timerWords");
var timer = document.getElementById("timer");
var index = 0;
var questionArray = [
  {
    question: "Which is the correct HTML element for the largest heading?",
    optionA: "<h6>",
    optionB: "<h1>",
    optionC: "<heading>",
    optionD: "<head>",
    answer: "b",
  },
  {
    question:
      "In CSS, which declaration would you use to change the size of text on the page?",
    optionA: "size:",
    optionB: "text-size:",
    optionC: "word-size",
    optionD: "font-size",
    answer: "d",
  },
  {
    question:
      "Which of these shows the proper syntax when writing a for loop in Javascript?",
    optionA:
      "for (let index = 0; index < array.length; index++) {const element = array[index];}",
    optionB:
      "for (index < array.length; index++; let index = 0) {const element = array[index];}",
    optionC:
      "for (let index = 0; index < array.length; const element = array[index]) {index++;}",
    optionD:
      "for (index++; let index = 0; index < array.length) {const element = array[index];}",
    answer: "a",
  },
  {
    question:
      "Which of these CSS declarations will turn a <div> element into a circle?",
    optionA: "shape: circle",
    optionB: "div: dot",
    optionC: "border-radius: 50%",
    optionD: "border-shape: round",
    answer: "c",
  },
  {
    question: "What terminal command will bring you up one directory?",
    optionA: "cd up",
    optionB: "cd out",
    optionC: "cd ./",
    optionD: "cd ..",
    answer: "d",
  },
  {
    question: "What does HTML stand for?",
    optionA: "Hyperlist Technical MIT Language",
    optionB: "Hyperlink Text Markup Language",
    optionC: "Highspeed Transistion eMail Loop",
    optionD: "Hyperlink Text Made Language",
    answer: "b",
  },
  {
    question:
      "In Javascript, what type of brackets are used when calling a function?",
    optionA: "function[];",
    optionB: "function{};",
    optionC: "function();",
    optionD: "function<>;",
    answer: "c",
  },
  {
    question: "In Javascript, what does the Math.random function return?",
    optionA: "A number between 0 and infinity",
    optionB: "An integer (whole number) between -100 and 100",
    optionC: "A number between 0 to 1",
    optionD: "A number from 0 to <1",
    answer: "d",
  },
  {
    question: "Which terminal command will create a new index.html document?",
    optionA: "touch index.html",
    optionB: "create index.html",
    optionC: "code index.html",
    optionD: "new index.html",
    answer: "a",
  },
  {
    question: "What does CSS stand for?",
    optionA: "Cascade Sheet Styles",
    optionB: "Cascading Style Sheets",
    optionC: "Cascader Sample Styles",
    optionD: "Cascading Simple Sheets",
    answer: "b",
  },
];

//main game functions
//pull up next question
function renderQuestion() {
  if (time === 0 || index >= questionArray.length) {
    clearInterval(interval);
    endQuiz();
  }
  questionWords.innerText = questionArray[index].question;
  answerA.innerText = questionArray[index].optionA;
  answerB.innerText = questionArray[index].optionB;
  answerC.innerText = questionArray[index].optionC;
  answerD.innerText = questionArray[index].optionD;
}

//out of time/hit the last question
function endQuiz() {
  questionWords.style.display = "none";
  choices.style.display = "none";
  timerWords.style.display = "none";
  scoreEl.style.display = "block";
  intialContainer.style.display = "block";
  highScore.style.display = "block";
  score = time;
  scoreElPush.innerText = score;
  backButton.style.display = "block";
  index = 0;
  for (let index = 0; index < highScoreArray.length; index++) {
    highScore1.innerText = `${highScoreArray[index].initials}, ${highScoreArray[index].score}`;
  }
  highScore1.innerText = `${highScoreArray[0].initials}, ${highScoreArray[0].score}`;
  highScore2.innerText = `${highScoreArray[1].initials}, ${highScoreArray[1].score}`;
  highScore3.innerText = `${highScoreArray[2].initials}, ${highScoreArray[2].score}`;
}

// start timer running
function startTimer(duration, display) {
  time = duration;
  interval = setInterval(function () {
    var minutes = parseInt(time / 60, 10);
    var seconds = parseInt(time % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ":" + seconds;
    time--;

    if (time <= 0) {
      clearInterval(interval);
      endQuiz();
    }
  }, 1000);
}

//check whether the user's answer is correct or incorrect
function handleGuess() {
  if (questionArray[index].answer !== this.getAttribute("id")) {
    time -= 10;
    index++;
    renderQuestion();
  } else {
    index++;
    renderQuestion();
  }
}

//begin the timer and quiz
function runQuiz() {
  startTimer(120, timer);

  questionWords.style.display = "block";
  choices.style.display = "block";
  timerWords.style.display = "block";
  renderQuestion();
}

//add high score
function submitHighScore() {
  highScoreArray.push({
    initials: yourInitals.value,
    score: score,
  });

  // Save highScore using `setItem()`
  localStorage.setItem("submittedHighScore", JSON.stringify(highScoreArray));
  setPastHighScore();
}

function setPastHighScore() {
  highScoreArray.sort((user1, user2) => user2.score - user1.score);
  highScoreArray = highScoreArray.splice(0, 3);
  localStorage.setItem("submittedHighScore", JSON.stringify(highScoreArray));
}

//event handler for submitting high score initials
submit.addEventListener("click", submitHighScore);

//event handlers for listening to user answers
answerA.addEventListener("click", handleGuess);
answerB.addEventListener("click", handleGuess);
answerC.addEventListener("click", handleGuess);
answerD.addEventListener("click", handleGuess);

// when begin button is clicked
begin.addEventListener("click", function () {
  desc.style.display = "none";
  rules.style.display = "none";
  begin.style.display = "none";
  runQuiz();
});

//when backButton is clicked
backButton.addEventListener("click", function () {
  scoreEl.style.display = "none";
  highScore.style.display = "none";
  intialContainer.style.display = "none";
  backButton.style.display = "none";
  desc.style.display = "block";
  rules.style.display = "block";
  begin.style.display = "block";
});
