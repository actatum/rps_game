function computerPlay() {
    let choice = Math.floor(Math.random() * 9);
    if (choice <= 3) return "Rock";
    if (choice > 3 && choice <= 6) return "Paper";
    if (choice > 6) return "Scissors";
}

function humanPlay() {
    let playerChoice = prompt("Type your choice 'Rock', 'Paper', or 'Scissors'")
    return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "Rock") {
        console.log("You both picked Rock, this round is a draw!")
        return "tie";
    }
    if (playerSelection == "rock" && computerSelection == "Paper") {
        console.log("You Lose! Paper beats Rock");
        return "lose";
    }
    if (playerSelection == "rock" && computerSelection == "Scissors") {
        console.log("You Win! Rock beats Scissors");
        return "win";
    }
    if (playerSelection == "paper" && computerSelection == "Paper") {
        console.log("You both picked Paper, this round is a draw!");
        return "tie"
    }
    if (playerSelection == "paper" && computerSelection == "Rock") {
        console.log("You Win!, Paper beats Rock"); 
        return "win";
    } 
    if (playerSelection == "paper" && computerSelection == "Scissors") {
        console.log("You Lose! Scissors beats Paper");
        return "lose";
    }
    if (playerSelection == "scissors" && computerSelection == "Scissors") {
        console.log("You both picked Scissors, this round is a draw!");
        return "tie"
    }
    if (playerSelection == "scissors" && computerSelection == "Paper") {
        console.log("You Win!, Scissors beats Paper");
        return "win";
    }
    if (playerSelection == "scissors" && computerSelection == "Rock") {
        console.log("You Lose! Rock beats Scissors");
        return "lose";
    }
}

function game() {
    let humanScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; ++i) {
        let result = playRound(humanPlay(), computerPlay());
        if (result == "win") {
            humanScore++;
        }
        else if (result == "lose") {
            computerScore++;
        }
    }
    if (humanScore > computerScore) {
        return "You win the game! With a score of You: " + humanScore + " to Computer: " + computerScore;
    }
    else if (humanScore < computerScore) {
        return "You lost the game! With a score of You: " + humanScore + " to Computer: " + computerScore;
    }
    else {
        return "You tied the game! With a score of You: " + humanScore + " to Computer: " + computerScore;
    }
}

//console.log(playRound(humanPlay(), computerPlay()));
console.log(game());