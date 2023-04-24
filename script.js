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

// HTML connections
const btn1 = document.querySelector(".btn1"); // rock
const btn2 = document.querySelector(".btn2"); // paper
const btn3 = document.querySelector(".btn3"); // scissor
const result = document.querySelector(".result");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const winner = document.querySelector(".winner");




let info = [
    { name: "Rock", id: 1 },
    { name: "Paper", id: 2 },
    { name: "Scissor", id: 3 },
];



function getComputerChoice() {

    // Generate random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < info.length; i++) {
        if (info[i].id === randomNumber) {
            return info[i].name;
        }
    }

}


let scoreC = [];
let scoreP = [];



function gameFunction() {

    let defaultBtn1 = "Rock";
    let defaultBtn2 = "Paper";
    let defaultBtn3 = "Scissor";

    // rock tie rock - paper tie paper - scissor tie scissor    
    if (defaultBtn1 === "Rock" && getComputerChoice() === info[0].name ||
        defaultBtn1 === "Paper" && getComputerChoice() === info[1].name ||
        defaultBtn1 === "Scissor" && getComputerChoice() === info[2].name) {

        result.textContent = "Draw! - Both scores: +0";
        scoreC.push(0);
        scoreP.push(0);

    }   else if (defaultBtn1 === "Rock" && getComputerChoice() === info[2].name || 
        defaultBtn2 === "Paper" && getComputerChoice() === info[0].name || 
        defaultBtn3 === "Scissor" && getComputerChoice() === info[1].name) {

        result.textContent = "You win! - Your score: +1 ";
        scoreP.push(1);
        scoreC.push(0);


    } else if (defaultBtn1 === "Rock" && getComputerChoice() === info[1].name || 
        defaultBtn2 === "Paper" && getComputerChoice() === info[2].name || 
        defaultBtn3 === "Scissor" && getComputerChoice() === info[0].name) {

        result.textContent = "Computer's win! - Your score: +0";
        scoreC.push(1);
        scoreP.push(0);
    }

    computerScore.textContent = scoreC.join(" - ");
    playerScore.textContent = scoreP.join(" - ");
    winnerOfRps();

}
btn1.addEventListener("click", gameFunction);
btn2.addEventListener("click", gameFunction);
btn3.addEventListener("click", gameFunction);



function winnerOfRps() {

    let sumaC = 0;
    let sumaP = 0;


    if (scoreP.length === 5) {

        let restart = document.createElement("button");
        restart.textContent = "Play again!";
        document.getElementById("restart-btn").appendChild(restart);
        restart.classList.add("restart-button");
        restart.classList.add("float");

        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;

        for (let i = 0; i < 5; i++) {
            sumaC = sumaC + scoreC[i];
            sumaP = sumaP + scoreP[i];
        }

        if (sumaC === sumaP) {
            winner.textContent = `We have a draw, with ${sumaC}-${sumaP} points`;
        } else if (sumaC > sumaP) {
            winner.textContent = `Computer win the game, with ${sumaC} points`;
        } else if (sumaP > sumaC) {
            winner.textContent = `You win the game, with ${sumaP} points`;
        }

        restart.onclick = () => {
            scoreP.length = 0;
            scoreC.length = 0;
            computerScore.textContent = "-";
            playerScore.textContent = "-";
            result.textContent = "Good luck!";
            winner.textContent = "-";
            btn1.disabled = false;
            btn2.disabled = false;
            btn3.disabled = false;
            restart.remove();
        }

    }

}






