

var startButton = document.querySelector("#start")
startButton.addEventListener("click", startQuiz);

let questionIndex = 0
// let availableQuestions = [... questionsList]
// let questionslist = []
// let correctAnswers = []
// function questionCounter {}

// * Create start button that when clicked a timer starts and the first question appears.
//EVENT LISTENER - 

var questionTitle = document.getElementById("question-title")


function startQuiz (){
document.querySelector("#start-screen").innerHTML=""
document.getElementById("questions").classList.remove("hide")
questionTitle.textContent=questionsList[0].question;
generateAnswerButtons()



//     document.getElementById("h101").innerHTML = "Question1";
//     document.getElementById("questionText").innerHTML = "This is the question";
// availableQuestions= [... questionsList]
// console.log(availableQuestions)
}

function generateAnswerButtons() {
    var answerChoicesArray=questionsList[questionIndex].options

for (var i=0;i<answerChoicesArray.length;i++) {
var answerButton=document.createElement("button")
answerButton.textContent=answerChoicesArray[i]
document.getElementById("choices").appendChild(answerButton)
answerButton.addEventListener("click", checkAnswer)
}
}

function checkAnswer (){
console.log("checkanswerfunctionworked") //replace with code to check answers

}

//counter
// var counter = 60
// setInterval (function () {
//     counter - 1
//     console.log(counter)
//     },1000)

// * Questions contain buttons for each answer.
// BUTTONS HTML - DOCUMENT - IF STATEMENTS

// * When answer is clicked, the next question appears
// function getNewQuestion() {


// }

// getNewQuestion()


// * If the answer clicked was incorrect then subtract time from the clock


// * The quiz should end when all questions are answered or the timer reaches 0.

// * When the game ends, it should display their score and give the user the ability to save their initials and their score
//local storage challenge


