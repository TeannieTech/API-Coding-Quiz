var startButton = document.querySelector("#start");
startButton.addEventListener("click", startQuiz);

let questionIndex = 0;
var timeRemaining = 60;
var counter = 100;
var questionTitle = document.getElementById("question-title");

function startQuiz() {
  document.querySelector("#start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");
  generateAnswerButtons();

  countDownTimer = setInterval(function () {
    counter = counter - 1;
    document.getElementById("time").innerHTML = counter;
    if (counter < 0) {
      endGame();
    }

    if (counter <= 0) {
        clearInterval(countDownTimer);
    
    }

  }, 1000);
}

function generateAnswerButtons() {
  questionTitle.textContent = questionsList[questionIndex].question;
  var answerChoicesArray = questionsList[questionIndex].options;
  document.getElementById("choices").innerHTML = "";
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
    // document.getElementById("results").innerHTML=("Correct");
  } else {
    alert("Incorrect answer!"), (counter = counter - 10);
  }

  questionIndex++;
  if (questionIndex >= questionsList.length) {
    endGame();
  } else {
    generateAnswerButtons();
  }
}

//endgamefunction
function endGame() {
  document.getElementById("questions").classList.add("hide");
  document.getElementById("end-screen").classList.remove("hide");
  document.getElementById("final-score").innerHTML = counter;
}

function saveScores() {
  //enter name
  //submit using botton
  //save in local storage
  //send to HTML high scores - info from local storage and apply to page (should happen on scores js)
  // window.location.href = "./highscores.html";
}
//event listener for button
