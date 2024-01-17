
function printHighscores(){
    var highscores = JSON.parse(window.localStorage.getItem("highscores") || [])
    console.log(highscores)

highscores.forEach(function(score) {
   
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
