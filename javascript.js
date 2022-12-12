function displayGameWinner(wins1,wins2){
    const gameWinner = document.querySelector(".finalwinner")
    if(wins1>wins2){
        gameWinner.textContent="You Won This Game"
    }
    else if (wins2>wins1){
        gameWinner.textContent="The PC Won This Game"
    }
    else{
        gameWinner.textContent="The Game Was Drawn"
    }
}

function resetGame(){
    document.querySelector('.playerwins').textContent="Player wins: 0"
    document.querySelector('.pcwins').textContent="PC wins: 0";
    document.querySelector('.draw').textContent="Draws: 0";
    playerWins=0;
    PcWins=0;
    draws=0;
    gamecount=0;

}

function getComputerChoice() {
    let gameChoices = ["Rock", "Paper", "Scissors"];
    let choice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return choice
}

function playRound(personChoice) {
    let playerChoice = personChoice;
    let computerChoice = getComputerChoice();
    if (playerChoice == computerChoice) {
        return ("Draw");
    }
    else if (playerChoice == "Paper" && computerChoice == "Rock") {
        
        return ("Player wins");
    }
    else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        
        return ("Player wins");
    }
    else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        
        return ("Player wins");
    }
    else if (computerChoice == "Paper" && playerChoice == "Rock") {
        
        return ("Computer wins");
    }
    else if (computerChoice == "Scissors" && playerChoice == "Paper") {
        
        return ("Computer wins");
    }
    else if (computerChoice == "Rock" && playerChoice == "Scissors") {
       
        return ("Computer wins");
    }
}


// function playGame(){
//     let playerWins = 0;
//     let computerWins = 0;

//     for (let i = 0; i < 5;i++){
//         let result = playRound();
//         if (result=="Player wins") {
//             playerWins++;
//         }
//         else if (result = "Computer wins"){
//             computerWins++;
//         }
//     }

//     if (playerWins>computerWins) {
//         console.log("Player wins the game");
//     }
//     else if (computerWins>playerWins){
//         console.log("Computer wins the game");
//     }
//     else if (playerWins==computerWins){
//         console.log("The game was drawn");
//     }
// }

let playerWins=0;
let PcWins=0;
let draws=0;
gamecount=0;

const resetbtn = document.querySelector(".reset");
resetbtn.addEventListener('click',()=>{
        resetGame();
})

const rockbtn = document.querySelector(".rock");
rockbtn.addEventListener('click',()=>{
const game = playRound("Rock");
console.log(game);
if(game=="Player wins"){
    playerWins +=1;
    gamecount+=1;
}
else if (game=="Computer wins"){
    PcWins =+1;
    gamecount+=1;
}
else{
    draws +=1;
    gamecount+=1;
}
const pWins = document.querySelector(".playerwins");
const cWins = document.querySelector(".pcwins")
const Draw = document.querySelector(".draw")
pWins.textContent=("Player Wins: " + playerWins);
cWins.textContent=("PC Wins: " + PcWins);
Draw.textContent=("Draws: " + draws);
const gameResult = document.querySelector(".result")
gameResult.textContent=game;
if (gamecount==5){
    displayGameWinner(playerWins,PcWins);
    resetGame();
}
}

);

const paperbtn = document.querySelector(".paper");
paperbtn.addEventListener('click',()=>{
const game = playRound("Paper");
console.log(game);
if(game=="Player wins"){
    playerWins +=1;
    gamecount+=1;
}
else if (game=="Computer wins"){
    PcWins =+1;
    gamecount+=1;
}
else{
    draws +=1;
    gamecount+=1;
}
const pWins = document.querySelector(".playerwins");
const cWins = document.querySelector(".pcwins")
const Draw = document.querySelector(".draw")
pWins.textContent=("Player Wins: " + playerWins);
cWins.textContent=("PC Wins: " + PcWins);
Draw.textContent=("Draws: " + draws);
const gameResult = document.querySelector(".result")
gameResult.textContent=game;

if (gamecount==5){
    displayGameWinner(playerWins,PcWins);
    resetGame();
}
}
);

const scissorsbtn = document.querySelector(".scissors");
scissorsbtn.addEventListener('click',()=>{
const game = playRound("Scissors");
console.log(game);
if(game=="Player wins"){
    playerWins +=1;
    gamecount+=1;
}
else if (game=="Computer wins"){
    PcWins =+1;
    gamecount+=1;
}
else{
    draws +=1;
    gamecount+=1;
}
const pWins = document.querySelector(".playerwins");
const cWins = document.querySelector(".pcwins")
const Draw = document.querySelector(".draw")
pWins.textContent=("Player Wins: " + playerWins);
cWins.textContent=("PC Wins: " + PcWins);
Draw.textContent=("Draws: " + draws);
const gameResult = document.querySelector(".result")
gameResult.textContent=game;
if (gamecount==5){
    displayGameWinner(playerWins,PcWins);
    resetGame();
}
}
);



