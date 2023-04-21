// Make a function to return rock paper or scissors called "getComputerChoice"
// The function going to randomly return rock paper or scissor
// And another one to "getPlayerChoice" and need recieve two parameters
// "playerSelection" and "computerSelection" and will return a string that declares the winner of the round
// And the playerSelection must be case-insensitive.

// Logic info
/*
Rock beat scissors and loses to paper.
Scissors beat paper, but loses to rock.
Paper beats rock, but loses to scissors.
*/

let info = [
    { name: "Rock", id: 1 },
    { name: "Paper", id: 2 },
    { name: "Scissors", id: 3 },
];



function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < info.length; i++) {
        if (info[i].id === randomNumber) {
            return info[i].name.toLowerCase();
        }
    }

}


function playRound(playerSelection, computerSelection) {

    let playerInput = playerSelection.toLowerCase();

    if (playerInput === computerSelection) {
        console.log("We have a draw!");
    } else if (playerInput === info[0].name.toLowerCase() && computerSelection === info[2].name.toLowerCase()) {
        console.log("You win! Congratulations");
    } else if (playerInput === info[0].name.toLowerCase() && computerSelection === info[1].name.toLowerCase()) {
        console.log("Computer's win!");
    } else if (playerInput === info[1].name.toLowerCase() && computerSelection === info[0].name.toLowerCase()) {
        console.log("You win! Congratulations");
    } else if (playerInput === info[1].name.toLowerCase() && computerSelection === info[2].name.toLowerCase()) {
        console.log("Computer's win!");
    } else if (playerInput === info[2].name.toLowerCase() && computerSelection === info[1].name.toLowerCase()) {
        console.log("You win! Congratulations");
    } else if (playerInput === info[2].name.toLowerCase() && computerSelection === info[0].name.toLowerCase()) {
        console.log("Computer's win!");
    } else {
        console.error("The input isn't compatible");
    }

}

function game() {
    let answers = [];
    for (let i = 0; i < 5; i++) {
        answers.push(playRound(prompt("Please, put your bet here"), getComputerChoice()));
    }
    return console.log(answers);
}