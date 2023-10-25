function getComputerChoice() {
    const pick = ["Rock","Paper","Scissors"];
    const randomchoice = pick[Math.floor(Math.random() * pick.length)];
    return randomchoice.toUpperCase();
}
let scoreComputer = 0;
let scorePlayer = 0;
// play only one round 
function theOneRoundPlay(computerSelection,playerSelection) {
    let result = document.querySelector('.results');
    let reslist = document.createElement('p');
    reslist.className = 'dlt';
    if (playerSelection == computerSelection) {
        reslist.textContent = "Its a tie, Try again" + " Computer : " + scoreComputer + " vs" + " Player : " + scorePlayer;
     } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "ROCK")) {
        scorePlayer++
        reslist.textContent = "You win! " + playerSelection.toLowerCase() +" beats " + computerSelection.toLowerCase() + " Computer : " + scoreComputer + " vs" + " Player : " + scorePlayer;
    } else {
        scoreComputer++
        reslist.textContent = "You lose! " + computerSelection.toLowerCase() +" beats " + playerSelection.toLowerCase() + " Computer : " + scoreComputer + " vs" + " Player : " + scorePlayer;
    }
    result.appendChild(reslist);
};
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener('click',() => {
    if (scoreComputer === 5 || scorePlayer === 5) {
        return;
    }
    computerSelection = getComputerChoice();
    playerSelection = 'ROCK';
    theOneRoundPlay(computerSelection,playerSelection);
    winerScore(scoreComputer,scorePlayer);
});
paper.addEventListener('click',() => {
    if (scoreComputer === 5 || scorePlayer === 5) {
        return;
    }
    computerSelection = getComputerChoice();
    playerSelection = 'PAPER';
    theOneRoundPlay(computerSelection,playerSelection);
    winerScore(scoreComputer,scorePlayer);
});
scissors.addEventListener('click',() => {
    if (scoreComputer === 5 || scorePlayer === 5) {
        return;
    }
    computerSelection = getComputerChoice();
    playerSelection = 'SCISSORS';
    theOneRoundPlay(computerSelection,playerSelection);
    winerScore(scoreComputer,scorePlayer);
});
//-----only display once if declered are outside
let result = document.querySelector('.results');
let reslist = document.createElement('li');
reslist.className = 'dlt';

// show winer at 5 wins and apear clearScore button
function winerScore(scoreComputer,scorePlayer) {
   
    if ((scoreComputer === 5) || (scorePlayer === 5)) {
            result.appendChild(reslist);
            clearbtn.textContent = "Clear score";
            clearr.appendChild(clearbtn);
            
        if (scoreComputer > scorePlayer) {
            reslist.textContent = "Computer wins with " + scoreComputer + " wins ";
        } 
        else if (scorePlayer > scoreComputer) { 
            reslist.textContent = "Player wins with " + scorePlayer + " wins "; 
        } 
    } 
};
// clear scoore, remove results from displayin and clear button.
let clearr = document.querySelector(".clear");
let clearbtn = document.createElement("button");
clearbtn.className = 'remmovbtn';
clearbtn.addEventListener("click",() => {
    clearr.firstChild.remove();
    scoreComputer = 0;
    scorePlayer = 0;
    while(result.firstChild){
        result.firstChild.remove();
    }
    
});









