// INTERACTIVITY


// * Create start button that when clicked a timer starts and the first question appears.
//EVENT LISTENER - 
function startQuiz (){

    document.getElementById("h101").innerHTML = "Question1";
    

//     <div id="start-screen" class="start">
//     <h1>Coding Quiz Challenge</h1>
//     <p>
//       Try to answer the following code-related questions within the time
//       limit. Keep in mind that incorrect answers will penalize your
//       score/time by ten seconds!
//     </p>
//     <!-- Added link to questions js -->
//     <button id="start">Start Quiz</button>
//   </div>

}

var startButton = document.querySelector("#start")
startButton.addEventListener("click", startQuiz);

// * Questions contain buttons for each answer.
// BUTTONS HTML - DOCUMENT - IF STATEMENTS

// * When answer is clicked, the next question appears
//RETURN NEXT SECTION


// * If the answer clicked was incorrect then subtract time from the clock


// * The quiz should end when all questions are answered or the timer reaches 0.

// * When the game ends, it should display their score and give the user the ability to save their initials and their score
//local storage challenge


