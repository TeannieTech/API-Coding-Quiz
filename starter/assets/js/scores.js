// saveScores()

function printHighscores(){
    var highscores = JSON.parse(window.localStorage.getItem("highscores") || [])
    console.log(highscores)

highscores.forEach(function(score) {
    // create li tag for each high score
    var li = document.createElement("li");
    li.textContent = score.submitInitials + " - " + score.score;

    // display on page
    var ol = document.getElementById("highscores");
    ol.appendChild(li);
  });

}


function clearHighScores(){

 window.localStorage.removeItem("highscores");
 window.location.reload();
}


document.getElementById("clear").onclick=clearHighScores
printHighscores()

// id is end-screen
// localStorage.setItem('id', 'initials');

// // Retrieve data
// const value = localStorage.getItem('id');

// score, submitInitials





// var enterInitials = document.querySelector("initials").value;
// localStorage.setItem("enterIntitials", initials);


// info from local storage and apply to page 
// document.getElementById("highscores").innerHTML=("name goes here")


//how to clear from local storage
//retrive 
// scores get item