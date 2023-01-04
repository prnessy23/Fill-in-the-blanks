// creating initial variables including: start button, words (array of words), timer container, wins/losses 

var startButton = document.getElementById("start");
var words = ["readme", "assets", "script", "style", "index", "java", "webpage", "coding", "developer", "tech"];
var word = document.getElementById("word-text");
var timer = document.getElementById("seconds");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var score = [0,0];
var time = 100;
var interval;

startButton.addEventListener("click", start);

function start(){
startTimer();
// startWords();
}

function startTimer(){
interval= setInterval(function(){
    if(time > 0){
        time--;
        timer.textContent=time;
    } else {
        endGame();
    }
}, 1000); 
}