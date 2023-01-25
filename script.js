function getComputerChoice() {
    const pick = ["Rock","Paper","Scissors"];
    const randomchoice = pick[Math.floor(Math.random() * pick.length)];
    return randomchoice.toUpperCase();
}

computerSelection = getComputerChoice();
playerSelection = prompt("Chose rock, paper or scissors", "").toUpperCase();


 function theOneRoundPlay() {
     if (playerSelection == computerSelection) {
         return "Its a tie, Try again";
     } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "ROCK")) {
        return "You win! " + playerSelection.toLowerCase() +" beats " + computerSelection.toLowerCase() + ".";
     } else {
        return "You lose! " + computerSelection.toLowerCase() +" beats " + playerSelection.toLowerCase() + ".";
     }
}
theOneRoundPlay()
//aaaa 
console.log(playerSelection);
console.log(computerSelection);
console.log(theOneRoundPlay());



