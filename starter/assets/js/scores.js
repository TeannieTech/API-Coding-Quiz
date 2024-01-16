// saveScores()

function getHighScores(){
    var highscores = JSON.parse(window.localStorage.getItem("highscores") || [])
    console.log(highscores)
}
console.log(getHighScores())


// id is end-screen
localStorage.setItem('id', 'initials');

// Retrieve data
const value = localStorage.getItem('id');



//  function renderLastRegistered() {
//     var email = localStorage.getItem("email");
//     var password = localStorage.getItem("password");
  
//     if (!email || !password) {
//       return;
//     }



// var enterInitials = document.querySelector("initials").value;
// localStorage.setItem("enterIntitials", initials);


// info from local storage and apply to page 
document.getElementById("highscores").innerHTML=("name goes here")


