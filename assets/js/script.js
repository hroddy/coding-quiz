var begin = document.getElementById("begin");
var title = document.getElementById("title");
var desc = document.getElementById("desc");
var rules = document.getElementById("rules");
var choices = document.getElementById("choices");

var questionWords = document.getElementById("question");
var answerA = document.getElementById("a");
var answerB = document.getElementById("b");
var answerC = document.getElementById("c");
var answerD = document.getElementById("d");

var score = 0;
var highScore = [];

var timerWords = document.getElementById("timerWords");
var timer = document.getElementById("timer");

var questionArray = [

    {
        question: "Which is the correct HTML element for the largest heading?",
        optionA: "<h6>",
        optionB: "<h1>",
        optionC: "<heading>",
        optionD: "<head>",
        answer: "b"
    },

    {
        question: "In CSS, which declaration would you use to change the size of text on the page?",
        optionA: "size:",
        optionB: "text-size:",
        optionC: "word-size",
        optionD: "font-size",
        answer: "d"
    },

    {
        question: "Which of these shows the proper syntax when writing a for loop in Javascript?",
        optionA: "for (let index = 0; index < array.length; index++) {const element = array[index];}",
        optionB: "for (index < array.length; index++; let index = 0) {const element = array[index];}",
        optionC: "for (let index = 0; index < array.length; const element = array[index]) {index++;}",
        optionD: "for (index++; let index = 0; index < array.length) {const element = array[index];}",
        answer: "a"
    },

    {
        question: "Which of these CSS declarations will turn a <div> element into a circle?",
        optionA: "shape: circle",
        optionB: "div: dot",
        optionC: "border-radius: 50%",
        optionD: "border-shape: round",
        answer: "c"
    },

    {
        question: "What terminal command will bring you up one directory?",
        optionA: "cd up",
        optionB: "cd out",
        optionC: "cd ./",
        optionD: "cd ..",
        answer: "d"
    },

    {
        question: "What does HTML stand for?",
        optionA: "Hyperlist Technical MIT Language",
        optionB: "Hyperlink Text Markup Language",
        optionC: "Highspeed Transistion eMail Loop",
        optionD: "Hyperlink Text Made Language",
        answer: "b"
    },

    {
        question: "In Javascript, what type of brackets are used when calling a function?",
        optionA: "function[];",
        optionB: "function{};",
        optionC: "function();",
        optionD: "function<>;",
        answer: "c"
    },

    {
        question: "In Javascript, what does the Math.random function return?",
        optionA: "A number between 0 and infinity",
        optionB: "An integer (whole number) between -100 and 100",
        optionC: "A number between 0 to 1",
        optionD: "A number from 0 to <1",
        answer: "d"
    },

    {
        question: "Which terminal command will create a new index.html document?",
        optionA: "touch index.html",
        optionB: "create index.html",
        optionC: "code index.html",
        optionD: "new index.html",
        answer: "a"
    },

    {
        question: "What does CSS stand for?",
        optionA: "Cascade Sheet Styles",
        optionB: "Cascading Style Sheets",
        optionC: "Cascader Sample Styles",
        optionD: "Cascading Simple Sheets",
        answer: "b"
    },
];

/* begin.addEventListener("click", function() {
    desc.style.display = "none";
    rules.style.display = "none";
});

endQuiz() {
    question.style.display = "none";
    choices.style.display = "none";
    timer.style.display = "none";
    score.style.display = "block"
    input initals for high score board
    add button for back to main
    backMain();
}

backMain() {
    title.stlye.display = "block";
    desc.style.display = "block";
    rules.style.display = "block";
    begin.style.display = "block";
}

startTimer(duration, display) {
    timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

    window.onload = function () {
    var twoMinutes = 60 * 2,
        display = document.getElementById("timer");
    startTimer(twoMinutes, display);
    };
}


*/

runQuiz() {
    for (let i = 0; i < questionArray.length; i++) {
        var question = questionArray[i];
    }
    questionWords.style.display = "block";
    choices.style.display = "block";
    timerWords.style.display = "block";
    /*
    question.innerHTML = 
    choices.inner html = 

    checkAnswer() {
        if (answer === true) {
            //pull next question
        }
        else {
            timer -= 00:10;
            //pull next questions
        }
    }

    if (timer === 0) {
        endQuiz();
    }
    */
}

begin.onclick = function() {
    desc.style.display = "none";
    rules.style.display = "none";
    begin.style.display = "none";
    runQuiz();
}