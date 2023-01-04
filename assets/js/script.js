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
var currentWord;
var pressedKeys = [];

startButton.addEventListener("click", start);

function start(){
    var wordList = document.querySelectorAll(".wordList");
    for (i = 0; i < wordList.length; i++) {
        wordList[i].remove();
    }
    time=100;    
    startTimer();
    startWords();
    startButton.removeEventListener("click", start );
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
        currentWord = words.splice(Math.floor(Math.random() * words.length), 1)[0];
        for (var i = 0; i < currentWord.length; i++) {
            var newSpan = document.createElement("span");
            newSpan.textContent = "_ ";
            newSpan.setAttribute("id", "letter" + i);
            word.appendChild(newSpan);
        }
        document.addEventListener("keydown", function (){
            evalMatch(event);
        } )
        // wordLength=0;
    } else {
        endGame();
    }
}

function endGame() {
    clearInterval(interval);
    if ( time > 0 ) { 

        score[0]++;

    } else {
        score[1]++;
    }  
var winsspan=document.getElementById("winsspan");
var lossspan=document.getElementById("lossspan");
winsspan.textContent=score[0];
lossspan.textContent=score[1];
words = ["readme", "assets", "script", "style", "index", "java", "webpage", "coding", "developer", "tech"];
startButton.addEventListener("click", start);

}

function evalMatch(event) {
    var pressedKey=event.key.toLowerCase();
    for (var i = 0; i < currentWord.length; i++){
        if (pressedKey === currentWord[i] && !pressedKeys.includes(pressedKey)){
            var currentSpan = document.getElementById("letter" + i);
            currentSpan.textContent = currentWord[i];
        }
    }
    pressedKeys.push(pressedKey);
    var wordLength = 0;
    for (var i = 0; i < currentWord.length; i++) {
        var currentSpan = document.getElementById("letter" + i);
        if (currentSpan.textContent !== "_ ") {
            wordLength++;
        }
        console.log(wordLength);
        console.log(currentWord.length);
    }
    if (wordLength === currentWord.length){
        console.log("complete");
        for (var i = 0; i < currentWord.length; i++){
            var currentSpan = document.getElementById("letter" + i);
            currentSpan.remove();
        }
        var prevWord = document.createElement("p");
        prevWord.textContent = currentWord;
        prevWord.className = "wordList";
        var wordSec = document.getElementById("word");
        wordSec.appendChild(prevWord);
        pressedKeys = [];
        startWords();
    }
}