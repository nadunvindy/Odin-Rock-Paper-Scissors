function getComputerChoice(){
    let gameChoices = ["Rock","Paper","Scissors"];
    let choice = gameChoices[Math.floor(Math.random()*gameChoices.length)];
    return choice
}

function getPersonChoice(){
    let choice = prompt("Please enter choice: ");
    let choicea = choice[0].toUpperCase()+choice.slice(1).toLowerCase();
    if(choicea == "Rock" || choicea == "Paper" || choicea == "Scissors"){
        return choicea;
    }
    else{
        console.log("Wrong Choice");
    }
}

function playRound(){
    let playerChoice = getPersonChoice();
    let computerChoice = getComputerChoice();
    console.log("Player: " + playerChoice);
    console.log("Computer: " + computerChoice);
    if (playerChoice == computerChoice) {
        console.log("Draw");
    }
    else if (playerChoice == "Paper" && computerChoice== "Rock") {
        console.log("Player Wins");
        return("Player wins");
    }
    else if (playerChoice == "Scissors" && computerChoice== "Paper") {
        console.log("Player Wins");
        return("Player wins");  
    }
    else if (playerChoice == "Rock" && computerChoice== "Scissors") {
        console.log("Player Wins");
        return("Player wins") ; 
    }
    else if (computerChoice == "Paper" && playerChoice== "Rock") {
        console.log("Computer Wins");
        return("Computer wins");
    }
    else if (computerChoice == "Scissors" && playerChoice== "Paper") {
        console.log("Computer Wins");
        return("Computer wins");  
    }
    else if (computerChoice == "Rock" && playerChoice== "Scissors") {
        console.log("Computer Wins");
        return("Computer wins");  
    }
}

function playGame(){
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5;i++){
        let result = playRound();
        if (result=="Player wins") {
            playerWins++;
        }
        else if (result = "Computer wins"){
            computerWins++;
        }
    }

    if (playerWins>computerWins) {
        console.log("Player wins the game");
    }
    else if (computerWins>playerWins){
        console.log("Computer wins the game");
    }
    else if (playerWins==computerWins){
        console.log("The game was drawn");
    }
}

playGame();