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
const btn_rock = document.querySelector(".btn_rock"); // rock
const btn_paper = document.querySelector(".btn_paper"); // paper
const btn_scissor = document.querySelector(".btn_scissor"); // scissor
const result = document.querySelector(".result");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const img_left = document.querySelector(".img_left");
const img_right = document.querySelector(".img_right");


let playerSelection;
let computerSelection;

const btn_container = document.querySelector(".button-container");
btn_container.addEventListener('click', function (e) {
    playerSelection = e.target.textContent;
    result.textContent = "";

    addAnim();
    computerSelection = (getCompSelection());
    img_left.onanimationend = function () {
        showHands(playerSelection, computerSelection);
        removeAnim();
        gameFunction(playerSelection, computerSelection);
    }
    resetHands();
});

function addAnim() { //adds class .anim to imgs
    img_left.classList.add('anim');
    img_right.classList.add('anim');
}

function removeAnim() { //removes class .anim from imgs
    img_left.classList.remove('anim');
    img_right.classList.remove('anim');
}

function getCompSelection() {
    let randomNo = Math.floor(Math.random() * 3);
    if (randomNo === 1) {
        return "Rock";
    } else if (randomNo === 2) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function showHands(playerSelection, computerSelection) { //shows hands with selection
    img_left.setAttribute('src', `assets/${playerSelection}L.png`);
    img_right.setAttribute('src', `assets/${computerSelection}R.png`);
}

function resetHands() { //reset imgs back to rock for next round
    img_left.setAttribute('src', "assets/RockL.png");
    img_right.setAttribute('src', "assets/RockR.png");
}


let scoreC = 0; // collect the score of the computer
let scoreP = 0; // collect the score of the player

function gameFunction(playerSelection, computerSelection) {

    // rock tie rock - paper tie paper - scissor tie scissor    
    if (playerSelection === computerSelection) {
        result.textContent = "It's a tie!";

    } else if ((playerSelection === "Rock" && computerSelection === "Scissor") ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissor" && computerSelection === "Paper") {

        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        scoreP++;



    } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissor" ||
        playerSelection === "Scissor" && computerSelection === "Rock") {

        result.textContent = `Computer's win! ${computerSelection} beats ${playerSelection}`;
        scoreC++;
    }

    computerScore.textContent = scoreC;
    playerScore.textContent = scoreP;


    if (scoreP === 5 || scoreC === 5) {
        declareWinner();
    }

}

btn_rock.addEventListener("click", gameFunction);
btn_paper.addEventListener("click", gameFunction);
btn_scissor.addEventListener("click", gameFunction);



function declareWinner() {

    let restart = document.createElement("button");
    restart.textContent = "Play again!";
    document.getElementById("restart-btn").appendChild(restart);
    restart.classList.add("restart-button");
    restart.classList.add("float");

    btn_rock.disabled = true;
    btn_paper.disabled = true;
    btn_scissor.disabled = true;

    if (scoreP === scoreC) {
        result.textContent = `We have a draw, with ${scoreC}-${scoreP} points.`;
    } else if (scoreC > scoreP) {
        result.textContent = `Computer win the game with ${scoreC} points.`;
    } else if (scoreP > scoreC) {
        result.textContent = `You win the game with ${scoreP} points!`;
    }

    restart.onclick = () => {
        scoreP = 0;
        scoreC = 0;
        computerScore.textContent = "-";
        playerScore.textContent = "-";
        result.textContent = "Click a button to play - First to 5 points wins!";
        btn_rock.disabled = false;
        btn_paper.disabled = false;
        btn_scissor.disabled = false;
        restart.remove();
    }

}







