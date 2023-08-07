//Math.floor(Math.random() * (max - min + 1)) + min;
//Syntax for generating a random number between max and nim
const max = 3;
const min = 1;
const playerRock = document.querySelector("#rock");
const playerPapers = document.querySelector("#paper");
const playerScissors = document.querySelector("#scissors")
let computerChoice;
let playerChoice;

function getComputerChoice(){
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min; //Generates random number between 1 and 3
    console.log(ranNum);
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
            console.log("Player wins! Rock beats scissors");
        }
        else if(cChoice === "paper"){
            console.log("Computer wins! Paper beats rock");
        }
        else{
            console.log("Its a tie!");
        }
    }
    else if(pChoice === "paper"){
        if(cChoice === "rock"){
            console.log("Player wins! paper beats rock");
        }
        else if(cChoice === "scissors"){
            console.log("Computer wins! Scissors beat paper");
        }
        else{
            console.log("Its a tie!");
        }
    }
    else if(pChoice === "scissors"){
        if(cChoice === "paper"){
            console.log("Player wins! Scissors beat paper");
        }
        else if (cChoice === "rock"){
            console.log("Computer wins! Rock beats scissors");
        }
        else{
            console.log("Its a tie!");
        }
    }
    else;
}

function game(){
    for(let i = 1; i <=5; i++){

        playRound("rock","rock")
    }
}

game();