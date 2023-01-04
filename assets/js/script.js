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
startWords();
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

function startWords() {
    if (words.length > 0) {
        var currentWord = words.splice(Math.floor(Math.random() * words.length), 1)[0];
        for (var i = 0; i < currentWord.length; i++) {
            var newSpan = document.createElement("span");
            newSpan.textContent = "_ ";
            newSpan.setAttribute("id", "letter" + i);
            word.appendChild(newSpan);
            document.addEventListener("keydown", evalMatch);
        }
    } else {
        endGame();
    }
}

function endGame() {

}

function evalMatch() {
    
}