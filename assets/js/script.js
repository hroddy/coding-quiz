var begin = document.getElementById("begin");
var title = document.getElementById("title");
var desc = document.getElementById("desc");
var rules = document.getElementById("rules");
var choices = document.getElementById("choices");
var interval;

var questionWords = document.getElementById("questionWords");
var answerA = document.getElementById("a");
var answerB = document.getElementById("b");
var answerC = document.getElementById("c");
var answerD = document.getElementById("d");

var score = 0;
var highScore = [];

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

// when begin button is pressed

begin.addEventListener("click", function () {
    desc.style.display = "none";
    rules.style.display = "none";
    begin.style.display = "none";
    runQuiz();
  });

function runQuiz() {
  startTimer(120, timer);

  questionWords.style.display = "block";
  choices.style.display = "block";
  timerWords.style.display = "block";
  renderQuestion();
}

  while (timer >= 0) {
    //pull up next question
}

    function renderQuestion() {
      if (timer === 0) {
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
      timer.style.display = "none";
      score = timer;
      score.style.display = "block";
      /* !! input initals for high score board
    !! push highScore to localStorage
    !! add button for back to main */
      backMain();
    }

    //back to the start and begin button

    function backMain() {
      desc.style.display = "block";
      rules.style.display = "block";
      begin.style.display = "block";
    }

    // start timer running

    function startTimer(duration, display) {
      timer = duration;
      interval = setInterval(function () {
        var minutes = parseInt(timer / 60, 10);
        var seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          timer = duration;
        }
      }, 1000);

      if (timer === 0) {
        clearInterval(interval);
        endQuiz();
      }
    }

    //event handlers for listening to user answers

    answerA.addEventListener("click", function (event) {
      if (questionWords === questionArray[9].question) {
        endQuiz();
      }
      if (
        questionArray[index].answer === "b" ||
        questionArray[index].answer === "c" ||
        questionArray[index].answer === "d"
      ) {
        timer -= 10;
        index++;
        renderQuestion();
      } else {
        index++;
        renderQuestion();
      }
    });

    answerB.addEventListener("click", function (event) {
      //index ++
      console.log("hello");
      if (questionWords === questionArray[9].question) {
        endQuiz();
      }
      if (
        questionArray[index].answer === "a" ||
        questionArray[index].answer === "c" ||
        questionArray[index].answer === "d"
      ) {
        timer -= 10;
        index++;
        renderQuestion();
      } else {
        index++;
        renderQuestion();
      }
    });

    answerC.addEventListener("click", function (event) {
      //index ++
      if (questionWords === questionArray[9].question) {
        if (
          questionArray[index].answer === "a" ||
          questionArray[index].answer === "b" ||
          questionArray[index].answer === "d"
        ) {
          timer -= 10;
          endQuiz();
        }
      }
      if (
        questionArray[index].answer === "a" ||
        questionArray[index].answer === "b" ||
        questionArray[index].answer === "d"
      ) {
        timer -= 10;
        index++;
        renderQuestion();
      } else {
        index++;
        renderQuestion();
      }
    });

    answerD.addEventListener("click", function (event) {
      //index ++
      if (questionWords === questionArray[9].question) {
        endQuiz();
      }
      if (
        questionArray[index].answer === "a" ||
        questionArray[index].answer === "b" ||
        questionArray[index].answer === "c"
      ) {
        timer -= 10;
        index++;
        renderQuestion();
      } else {
        index++;
        renderQuestion();
      }
    });

  

