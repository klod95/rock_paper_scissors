function getComputerChoice() {
    const pick = ["Rock","Paper","Scissors"];
    const randomchoice = pick[Math.floor(Math.random() * pick.length)];
    return randomchoice.toUpperCase();
}
let scoreComputer = 0;
let scorePlayer = 0;

function theOneRoundPlay(computerSelection,playerSelection) {
    if (playerSelection == computerSelection) {
        let result = document.querySelector(".results");
        let reslist = document.createElement('p');
        reslist.textContent = "Its a tie, Try again" + " Computer : " + scoreComputer + " vs" + " Player : " + scorePlayer;
        result.appendChild(reslist);
     } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "ROCK")) {
        let result = document.querySelector('.results');
        let reslist = document.createElement('p');
        scorePlayer++
        reslist.textContent = "You win! " + playerSelection.toLowerCase() +" beats " + computerSelection.toLowerCase() + " Computer : " + scoreComputer + " vs" + " Player : " + scorePlayer;
        result.appendChild(reslist);
    } else {
        let result = document.querySelector('.results');
        let reslist = document.createElement('p');
        scoreComputer++
        reslist.textContent = "You lose! " + computerSelection.toLowerCase() +" beats " + playerSelection.toLowerCase() + " Computer : " + scoreComputer + " vs" + " Player : " + scorePlayer;
        result.appendChild(reslist);
    }
};
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener('click',() => {
    computerSelection = getComputerChoice();
    playerSelection = 'ROCK';
    theOneRoundPlay(computerSelection,playerSelection);
    winerScore(scoreComputer,scorePlayer);
});
paper.addEventListener('click',() => {
    computerSelection = getComputerChoice();
    playerSelection = 'PAPER';
    theOneRoundPlay(computerSelection,playerSelection);
    winerScore(scoreComputer,scorePlayer);
});
scissors.addEventListener('click',() => {
    computerSelection = getComputerChoice();
    playerSelection = 'SCISSORS';
    theOneRoundPlay(computerSelection,playerSelection);
    winerScore(scoreComputer,scorePlayer);
});

function winerScore(scoreComputer,scorePlayer) {
    if ((scoreComputer === 5) || (scorePlayer === 5)) {
        if (scoreComputer > scorePlayer) {
            let result = document.querySelector('.results');
            let reslist = document.createElement('li');
            reslist.textContent = "Computer wins with " + scoreComputer + " wins ";
            result.appendChild(reslist);
        } 
        else if (scorePlayer > scoreComputer) { 
            let result = document.querySelector('.results');
            let reslist = document.createElement('li');
            reslist.textContent = "Player wins with " + scorePlayer + " wins ";
            result.appendChild(reslist);
        } 
    } 
};










// function winerCheck(computerSelection,playerSelection){
//     if (playerSelection == computerSelection) {
//         return "tie";
//     } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "ROCK")) {
//        return "player";
//     } else {
//        return "computer";
//     }
// }
 

// function scoreCount(){
//     let scorePlayer = 0;
//     let scoreComputer = 0;
    
//     for (let i = 0; i < 5; i++) {
//         if  (winerCheck() == "player") {
//                 scorePlayer++;
//             } else if (winerCheck() == "computer") {
//                 scoreComputer++;
//             } else {}
//         } 
    // if (scoreComputer > scorePlayer) {
    //     let result = document.querySelector('.results');
    //     let reslist = document.createElement('li');
    //     reslist.textContent = "Computer wins with " + scoreComputer + " wins ";
    //     result.appendChild(reslist);
    // } 
    // else if (scorePlayer > scoreComputer) { 
    //     let result = document.querySelector('.results');
    //     let reslist = document.createElement('li');
    //     reslist.textContent = "Player wins with " + scorePlayer + " wins ";
    //     result.appendChild(reslist);
    // } 
    // else { 
    //     let result = document.querySelector('.results');
    //     let reslist = document.createElement('li');
    //     reslist.textContent = "ITS A FREAKING TIE with score " + scoreComputer + " - " + scorePlayer;
    //     result.appendChild(reslist);
    // }    
// }   








