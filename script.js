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

//  *******************************rock***************************************
function rock() {

    let defaultBtn1 = "Rock";

    // rock tie rock
    if (defaultBtn1 === "Rock" && getComputerChoice() === info[0].name) {
        result.textContent = "We have a draw!";
        scoreC.push(0);
        scoreP.push(0);

        // rock beat scissors
    } else if (defaultBtn1 === "Rock" && getComputerChoice() === info[2].name) {
        result.textContent = "You win! Congratulations";
        scoreP.push(1);
        scoreC.push(0);

        // rock loses to paper
    } else if (defaultBtn1 === "Rock" && getComputerChoice() === info[1].name) {
        result.textContent = "Computer's win!";
        scoreC.push(1);
        scoreP.push(0);
    }
    computerScore.textContent = scoreC.join(", ");
    playerScore.textContent = scoreP.join(", ");
    winnerOfRps();
}

btn1.addEventListener("click", rock);
//  *******************************rock***************************************


//  *******************************paper***************************************
function paper() {
    let defaultBtn2 = "Paper";

    if (defaultBtn2 === "Paper" && getComputerChoice() === info[1].name) {
        result.textContent = "We have a draw!";
        scoreC.push(0);
        scoreP.push(0);

        // paper beat rock
    } else if (defaultBtn2 === "Paper" && getComputerChoice() === info[0].name) {
        result.textContent = "You win! Congratulations";
        scoreP.push(1);
        scoreC.push(0);

        // paper loses to scissor
    } else if (defaultBtn2 === "Paper" && getComputerChoice() === info[2].name) {
        result.textContent = "Computer's win!";
        scoreC.push(1);
        scoreP.push(0);
    }
    computerScore.textContent = scoreC.join(", ");
    playerScore.textContent = scoreP.join(", ");
    winnerOfRps();
}

btn2.addEventListener("click", paper);
//  *******************************paper***************************************



//  *******************************scissor***************************************
function scissor() {
    let defaultBtn3 = "Scissor";



    if (defaultBtn3 === "Scissor" && getComputerChoice() === info[2].name) {
        result.textContent = "We have a draw!";
        scoreC.push(0);
        scoreP.push(0);

        // scissor beat paper
    } else if (defaultBtn3 === "Scissor" && getComputerChoice() === info[1].name) {
        result.textContent = "You win! Congratulations";
        scoreP.push(1);
        scoreC.push(0);

        // scissor loses to rock
    } else if (defaultBtn3 === "Scissor" && getComputerChoice() === info[0].name) {
        result.textContent = "Computer's win!";
        scoreC.push(1);
        scoreP.push(0);
    }
    computerScore.textContent = scoreC.join(", ");
    playerScore.textContent = scoreP.join(", ");
    winnerOfRps();
}

btn3.addEventListener("click", scissor);
//  *******************************scissor***************************************





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






