let computerChoice;
let userWins = 0;
let computerWins = 0;

function playRound () {
let userChoice = prompt("Rock, paper or scissors?").toLowerCase()
if (userChoice === "rock" || userChoice === "paper" || userChoice ==="scissors") {
    round(userChoice, getComputerChoice())

} else {
    console.log("invalid input")
}
}
function getComputerChoice() {
    let computerNumber =  Math.floor(Math.random() * 3)
    if (computerNumber === 1) {
        return computerChoice = "Rock"
    } else if (computerNumber === 2){
        return computerChoice = "Paper"
    } else {
        return computerChoice = "Scissors"
    }
    
    
}

function round(userChoice, getComputerChoice) {
    
    console.log(userChoice, computerChoice)
    if (userChoice === "rock" && getComputerChoice === "Scissors" || 
        userChoice === "paper" && getComputerChoice === "Rock" ||
        userChoice === "scissors" && getComputerChoice === "Paper" ) {
        
        console.log("User wins!")
        ++userWins
    } else if(
        getComputerChoice === "Rock" && userChoice === "scissors" || 
        getComputerChoice === "Paper" && userChoice === "rock" ||
        getComputerChoice === "Scissors" && userChoice === "paper" ) {
        
        console.log("Computer wins!")
        ++computerWins
    } else {
        
        console.log("Its a tie!")
    }
    

}
function game() {
    for (let index = 0; index < 5; index++) {
        playRound()
        
    }
    if (userWins > computerWins) {
        alert("User wins!")
    } else if (computerWins > userWins){
        alert("Computer wins")
    } else {
        alert("Its a tie!")
    }
}

game();










