var startButton = document.querySelector("#start");
startButton.addEventListener("click", startQuiz);

let questionIndex = 0;

//counter - leave at top as runs in order
// var counter = 60
// setInterval (function () {
//     counter - 1
//     console.log(counter)
//     },1000)


// * Create start button that when clicked a timer starts and the first question appears.
//EVENT LISTENER - timer

var questionTitle = document.getElementById("question-title");

function startQuiz() {
  document.querySelector("#start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");
  generateAnswerButtons(); // execute timer function
}

function generateAnswerButtons() {
  questionTitle.textContent = questionsList[questionIndex].question;
  var answerChoicesArray = questionsList[questionIndex].options;
document.getElementById("choices").innerHTML=""
  for (var i = 0; i < answerChoicesArray.length; i++) {
    var answerButton = document.createElement("button");
    answerButton.textContent = answerChoicesArray[i];
    document.getElementById("choices").appendChild(answerButton);
    answerButton.addEventListener("click", checkAnswer);
  }
}

//need to complete check answer button
function checkAnswer() {
  var possibleAnswersArray = questionsList[questionIndex].correctAnswer;
  console.log(this.textContent);
  console.log(possibleAnswersArray);

  //if options(=possibleAmswersArray)
  if (this.textContent === possibleAnswersArray) {
    alert("Correct answer!");
  } else {
    alert("Incorrect answer!");
  }

  questionIndex++
  if (questionIndex>=questionsList.length){
    endGame()
  }
  else {
    generateAnswerButtons ()
  }

}


//endgamefunction
function endGame (){
    document.getElementById("questions").classList.add("hide")
    document.getElementById("end-screen").classList.remove("hide")
//stop timer - used as the score - what is left on counter will be the score
}

function saveScores (){
    //enter name
    //submit using botton
    //save in local storage
    //send to HTML high scores - info from local storage and apply to page (should happen on scores js)
}
//event listener for button




// The quiz should end when all questions are answered or the timer reaches 0. //if statement

