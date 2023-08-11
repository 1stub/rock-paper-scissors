//Math.floor(Math.random() * (max - min + 1)) + min;
//Syntax for generating a random number between max and nim
const max = 3;
const min = 1;
const playerRock = document.querySelector("#rock");
const playerPapers = document.querySelector("#paper");
const playerScissors = document.querySelector("#scissors")
const score = document.querySelector("#score");
const winLossMsg = document.querySelector("#winloss")
let tie = false;
let pScore = 0;
let cScore = 0;
let computerChoice;
let playerChoice;

playerRock.addEventListener('click', () => {
    playerChoice = "rock";
    gameEvent();
});

playerPapers.addEventListener('click', () => {
    playerChoice = "paper";
    gameEvent();
});

playerScissors.addEventListener('click', () => {
    playerChoice = "scissors";
    gameEvent();
});

function gameEvent(){
    getComputerChoice();
    playRound(playerChoice, computerChoice);
    game();
    score.textContent = `${pScore} - ${cScore}`;
}

function getComputerChoice(){
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min; //Generates random number between 1 and 3
    if(ranNum === 1){
        return computerChoice = "Rock";
    }
    else if(ranNum === 2){
        return computerChoice = "Paper";
    }
    else{
        return computerChoice = "Scissors";
    }
}

function playRound(pChoice, cChoice){
    pChoice = pChoice.toLowerCase();
    cChoice = cChoice.toLowerCase();
    if(pChoice === "rock"){
        if(cChoice === "scissors"){
            winLossMsg.textContent = "Player wins! Rock beats scissors";
            pScore +=1;
        }
        else if(cChoice === "paper"){
            winLossMsg.textContent = "Computer wins! Paper beats rock";
            cScore += 1;
        }
        else{
            winLossMsg.textContent = "Its a tie!";
            tie = true;
        }
    }
    else if(pChoice === "paper"){
        if(cChoice === "rock"){
            winLossMsg.textContent = "Player wins! paper beats rock";
            pScore +=1;
        }
        else if(cChoice === "scissors"){
            winLossMsg.textContent = "Computer wins! Scissors beat paper";
            cScore+=1;
        }
        else{
            winLossMsg.textContent = "Its a tie!";
            tie = true;
        }
    }
    else if(pChoice === "scissors"){
        if(cChoice === "paper"){
            winLossMsg.textContent = "Player wins! Scissors beat paper";
            pScore+=1;
        }
        else if (cChoice === "rock"){
            winLossMsg.textContent = "Computer wins! Rock beats scissors";
            cScore+=1;
        }
        else{
            winLossMsg.textContent = "Its a tie!";
            tie = true;
        }
    }
    else;
}

function game(){
    if(pScore === 5 || cScore === 5){
        if(pScore === 5){
            console.log("Player wins!");
        }
        if(cScore === 3){
            console.log("Computer wins! Try again maybe?");
        }
    }
}