const container = document.querySelector(".container");
const button = document.querySelector(".button");



button.addEventListener("mouseover",teleport);
function teleport()
{
    var x = Math.floor(Math.random()*500)+100;
    var y = Math.floor(Math.random()*500)+100;
    button.style.left = x+"px";
    button.style.top = y+"px";  
}

let currentScore = 1;
button.addEventListener("mouseover",addScore);
function addScore()
{
    var score = document.getElementById("score");
    score.innerHTML = currentScore++;
}