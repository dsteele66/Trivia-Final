
const start = document.getElementById("start");
const trivia = document.getElementById("trivia");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions\


let questions = [
    {
        question : "Who directed the Dark Knight trilogies? ",
        choiceA : "Christopher Nolan",
        choiceB : "Hans Zimmer",
        choiceC : "Ryan Coogler",
        correct : "A"
    },{
     
        question : "How many championships do Kobe and Shaq have together?",
        choiceA : "2",
        choiceB : "3",
        choiceC : "5",
        correct : "B"
    },{
        question : "What play did Denzel adapt into a movie ?  ",
        choiceA : "Antoine Fisher",
        choiceB : "Training Day",
        choiceC : "Fences",
        correct : "C"
    },{
        question : "What is the name of the actor that played Jarvis in the avengers? ",
        choiceA : "Paul Bettany",
        choiceB : "Chris Evans",
        choiceC : "Hugh Laurie",
        correct : "A"
    },{
        question : "Who was supposed to play Neo in the Matrix?",
        choiceA : "Brad Pitt",
        choiceB : "Will Smith",
        choiceC : "Idris Elba",
        correct : "B"
    },{
        question : "Who played Amanda Waller in the live action version of Suicide Squad?",
        choiceA : "Amanda Seyfried",
        choiceB : "Viola Davis",
        choiceC : "Angela Bassett",
        correct : "B"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 20; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startGame);

// start question
function startGame(){
    start.style.display = "none";
    renderQuestion();
    trivia.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the question and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // stop showing the question and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "green";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "red";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);


   
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/1.png" :
              (scorePerCent >= 60) ? "img/1.png" :
              (scorePerCent >= 50) ? "img/1.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    // scoreDiv.innerHTML = "<img src="+ img +">";
    // scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>" +"Thank you for playing!";
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
    
}

