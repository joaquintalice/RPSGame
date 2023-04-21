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
            return info[i].name;
        }
    }
    
}


function playRound() {



}

