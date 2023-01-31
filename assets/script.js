//Selecte all target HTML elements//
const start = document.getElementById("start");
const quiz = document.getElementById("container1");
const counter = document.getElementById("counter");
const question = document.getElementById("question");
const button0= document.getElementById("choice0");
const button1= document.getElementById("choice1");
const button2= document.getElementById("choice2");
const result = document.getElementById("score");
const button = document.querySelector("btn");
const number = document.getElementById("number");

//Create an array of questions//
let questions = [
    {
        question:"Which of the following is not a valid HTML tag?",
        button0:"H8",
        button1:"h1",
        button2:"h3",
        correct:"0",
    },{
        question:"How do you add a comment in CSS?",
        button0:"!--comment--",
        button1:"/*comment*/",
        button2:"//comment//",
        correct:"1",
    },{
        question:"What does CSS stand for?",
        button0:"Colourful Style Sheet",
        button1:"Customer Style Shhet",
        button2:"Cascading Style Sheet",
        correct:"2",
    },{
        question:"What is the # symbol used to select?",
        button0:"id",
        button1:"class",
        button2:"tag",
        correct:"0",
    },{
        question:"Where can the JavaScript link be placed in HTML file?",
        button0:"Head section only",
        button1:"Both within the Head and Body sections ",
        button2:"Body section only",
        correct:"1",
    }
];

//Create variables//
const lastQuestion = questions.length -1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
let TIMER;
let score = 0;

//render a question//
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML= q.question;
    button0.innerHTML = q.button0;
    button1.innerHTML = q.button1;
    button2.innerHTML = q.button2;
}

start.addEventListener("click",startQuiz);

// start quiz and hide start//
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        count++
    }else{
        count = 0;
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// check if the answer is correct//
function checkAnswer(answer){
//if answer is correct add 1 to the score//
    if( answer == questions[runningQuestion].correct){
        score++
    } else {}

    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{ 
        clearInterval(TIMER);
        scoreRender();
    }
}

// score render - need to store the scores in localStorage and display them with user initials//
function scoreRender(){
    //hide quiz and display results//
    quiz.style.display = "none";
    result.style.display = "block";
    const scorePerCent = Math.round(100 * score/questions.length);
    number.innerHTML += "Score: " + scorePerCent + "%";
}

