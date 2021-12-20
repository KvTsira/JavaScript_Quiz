const question=document.querySelector('#question');
const choices=Array.from(document.querySelectorAll('.choice-text'));
const scoreText=document.querySelector('#score');

var quizTimer = document.getElementById("timer");


var currentQuestion = {}
var correctAnswers = true
var score = 0
var questionCounter = 0
var remainingQuestions= []

var timeLeft = 60;
var timerInterval;

//quiz question object
var questions = [
    {
        question: "The 'function' and 'var' are known as:",
        choice1: 'Keywords',
        choice2: 'Data types',
        choice3: 'Declaration statements',
        choice4: 'Prototypes',
        correctAnswer: 3,
    },
    {
        question: " Which of the following variables takes precedence over the others if the names are the same?",
        choice1: 'Global variable',
        choice2: 'The local element',
        choice3: 'The two of the above',
        choice4: 'None of the above',
        correctAnswer: 2,
    },
    {
        question: "Which one of the following is the correct way for calling the JavaScript code?",
        choice1: 'Preprocessor',
        choice2: 'Triggering Event',
        choice3: 'RMI',
        choice4: 'Function/Method',
        correctAnswer: 4,
    },
    {
        question: "In the JavaScript, which one of the following is not considered as an error:",
        choice1: 'Syntax error',
        choice2: 'Missing of semicolons',
        choice3: 'Division by zero',
        choice4: 'Missing of Bracket',
        correctAnswer: 3,
    },
    {
        question: "Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
        choice1: 'splice()',
        choice2: 'split()',
        choice3: 'substr()',
        choice4: 'search()',
        correctAnswer: 3,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4


startQuiz = function() {

    //timer
    timerInterval = setInterval(function(){
        //decrement the time
        timeLeft--;
        quizTimer.textContent="Time left: " + timeLeft;

        //check if time runs out
        if(timeLeft === 0) {
            clearInterval(timerInterval);
            localStorage.setItem('mostRecentScore', score)
            return window.location.assign('./end.html');
        }
    }, 1000)

    questionCounter = 0;
    score = 0;
    remainingQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = function() {
    if(remainingQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('./end.html');
    }

    questionCounter ++;

    const questionsindex = Math.floor(Math.random() * remainingQuestions.length);
    currentQuestion = remainingQuestions[questionsindex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    //method to change the content of an array by removing existing element
    remainingQuestions.splice(questionsindex, 1);

    correctAnswers = true;
        
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!correctAnswers) return

        correctAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.correctAnswer ? 'correct' : 'incorrect'

        if (classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})


incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startQuiz()