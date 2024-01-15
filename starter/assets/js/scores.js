 //send to HTML high scores - info from local storage and apply to page (should happen on scores js)
//  function renderLastRegistered() {
//     var email = localStorage.getItem("email");
//     var password = localStorage.getItem("password");
  
//     if (!email || !password) {
//       return;
//     }
  
//     userEmailSpan.textContent = email;
//     userPasswordSpan.textContent = password;
//   }
  
//   signUpButton.addEventListener("click", function(event) {
//     event.preventDefault();
  
//     var email = document.querySelector("#email").value;
//     var password = document.querySelector("#password").value;
  
//     if (email === "") {
//       displayMessage("error", "Email cannot be blank");
//     } else if (password === "") {
//       displayMessage("error", "Password cannot be blank");
//     } else {
//       displayMessage("success", "Registered successfully");
  
//       localStorage.setItem("email", email);
//       localStorage.setItem("password", password);
//       renderLastRegistered();
//     }
//   });

// document.addEventListener('DOMContentLoaded', function () {
//     const startBtn = document.getElementById('start-btn');
//     const questionContainer = document.getElementById('question-container');
//     const optionsContainer = document.getElementById('options-container');
//     const resultContainer = document.getElementById('result-container');
//     const timerContainer = document.getElementById('timer-container');
//     const timeElement = document.getElementById('time');

//     let currentQuestionIndex = 0;
//     let timer;
//     let timeRemaining = 60; // Initial time in seconds




//     function startQuiz() {
//         startBtn.style.display = 'none';
//         questionContainer.style.display = 'block';
//         timerContainer.style.display = 'block';
//         showQuestion();
//         startTimer();
//     }




        // if (selectedAnswer === currentQuestion.correctAnswer) {
        //     showResult('Correct!', 'green');
        // } else {
        //     showResult('Incorrect! -10 seconds', 'red');
        //     timeRemaining -= 10; // Subtract 10 seconds for incorrect answer
        // }


    // function showResult(message, color) {
    //     resultContainer.style.display = 'block';
    //     resultContainer.style.color = color;
    //     resultContainer.textContent = message;



//     function startTimer() {
//         timer = setInterval(function () {
//             if (timeRemaining > 0) {
//                 timeRemaining--;
//                 timeElement.textContent = timeRemaining;
//             } else {
//                 endQuiz();
//             }
//         }, 1000);
//     }

//     function endQuiz() {
//         clearInterval(timer);
//         questionContainer.style.display = 'none';
//         timerContainer.style.display = 'none';
//         resultContainer.style.display = 'block';
//         resultContainer.style.color = 'black';
//         resultContainer.textContent = `Quiz completed! Your score: ${timeRemaining} seconds`;
//     }
// });
