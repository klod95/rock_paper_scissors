function getComputerChoice() {
    const pick = ["Rock","Paper","Scissors"];
    const randomchoice = pick[Math.floor(Math.random() * pick.length)];
    return randomchoice.toUpperCase();
}


// function winerCheck(computerSelection,playerSelection){
//     if (playerSelection == computerSelection) {
//         return "tie";
//     } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "ROCK")) {
//        return "player";
//     } else {
//        return "computer";
//     }
// }
function theOneRoundPlay(computerSelection,playerSelection) {
    if (playerSelection == computerSelection) {
        let result = document.querySelector(".results");
        let reslist = document.createElement('p');
        reslist.textContent = "Its a tie, Try again";
        result.appendChild(reslist);
     } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "ROCK")) {
        let result = document.querySelector('.results');
        let reslist = document.createElement('p');
        reslist.textContent = "You win! " + playerSelection.toLowerCase() +" beats " + computerSelection.toLowerCase() + ".";
        result.appendChild(reslist);
    } else {
        let result = document.querySelector('.results');
        let reslist = document.createElement('p');
        reslist.textContent = "You lose! " + computerSelection.toLowerCase() +" beats " + playerSelection.toLowerCase() + ".";
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
    console.log(playerSelection);
    console.log("comp" + computerSelection);
});
paper.addEventListener('click',() => {
    computerSelection = getComputerChoice();
    playerSelection = 'PAPER';
    theOneRoundPlay(computerSelection,playerSelection);
    console.log(playerSelection);
    console.log("comp" + computerSelection);
});
scissors.addEventListener('click',() => {
    computerSelection = getComputerChoice();
    playerSelection = 'SCISSORS';
    theOneRoundPlay(computerSelection,playerSelection);
    console.log(playerSelection);
    console.log("comp" + computerSelection);
});


 

// function theGame(){
//     let scorePlayer = 0;
//     let scoreComputer = 0;
//     for (let i = 0; i < 5; i++) {
//         playerSelection = prompt("Chose rock, paper or scissors", "").toUpperCase();
//         computerSelection = getComputerChoice();
//         theOneRoundPlay(computerSelection,playerSelection);
//         console.log("You chose " + playerSelection);
//         console.log("Computer chose " + computerSelection);
//         console.log(theOneRoundPlay(computerSelection,playerSelection));
//         console.log("----------------------")
//         if  (winerCheck(computerSelection,playerSelection) == "player") {
//                 scorePlayer++;
//             } else if (winerCheck(computerSelection,playerSelection) == "computer") {
//                 scoreComputer++;
//             } else {}
//         } 
//     if (scoreComputer > scorePlayer) {console.log("Computer wins with " + scoreComputer + " wins ")
//     } else if (scorePlayer > scoreComputer) { console.log("Player wins with " + scorePlayer + " wins ")
//     } else { console.log("ITS A FREAKING TIE with score " + scoreComputer + " - " + scorePlayer)
//     }    
// }   
// theGame()







