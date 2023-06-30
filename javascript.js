let computerChoice;
let userChoice;
let result;
let userWins = 0;
let computerWins = 0;
let ties = 0;
let resetButtonCreated = false;



/* function playRound () {

if (userChoice === "rock" || userChoice === "paper" || userChoice ==="scissors") {
    round(userChoice, getComputerChoice())

} else {
    console.log("invalid input")
}
} */
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

function round(userChoice) {
    
    console.log(userChoice, computerChoice)
    if (userChoice === "rock" && computerChoice === "Scissors" || 
        userChoice === "paper" && computerChoice === "Rock" ||
        userChoice === "scissors" && computerChoice === "Paper" ) {
        
        result = "User wins!"
        ++userWins
    } else if(
        computerChoice === "Rock" && userChoice === "scissors" || 
        computerChoice === "Paper" && userChoice === "rock" ||
        computerChoice === "Scissors" && userChoice === "paper" ) {
        
        result = "Computer wins!"
        ++computerWins
    } else {
        
        result = "Its a tie!"
        ++ties
    }
    

}


const buttonRock = document.querySelector(".rock");
const buttonPaper = document.querySelector(".paper");
const buttonScissors = document.querySelector(".scissors");

const resultRound =

buttonRock.addEventListener('click', getChoice);
buttonPaper.addEventListener('click', getChoice);
buttonScissors.addEventListener('click', getChoice);


function getChoice(e) {
    e.stopPropagation();
    
    if ( e.target.className === "rock" ) {
    userChoice = "rock"
    } else if (e.target.className === "paper") {
        userChoice = "paper"
    } else {
        userChoice = "scissors"
    }
    getComputerChoice();
    round(userChoice, computerChoice);
    showResults();
    winner();
   
}
const body = document.querySelector("body")
const roundResults = document.querySelector(".rounds");
const finalResult = document.createElement("h1");
body.appendChild(finalResult)

function showResults() {
    roundResults.innerHTML = `USER WINS: ${userWins} 
    COMPUTER WINS: ${computerWins} 
    TIES: ${ties}`
}

function winner() {
    
    if (userWins === 5) {
        finalResult.innerText = "USER WINS!!!!"
        if (resetButtonCreated === false) {
            const reset = document.createElement("button");
            reset.innerText = "RESETEAR"
        
            body.appendChild(reset)
            resetButtonCreated = true;
            reset.addEventListener ("click", () => {
                userWins = 0;
                computerWins = 0;
                ties = 0;
                showResults();
            })
            }
    } else if (computerWins === 5) {
        finalResult.innerText = "COMPUTER WINS!!! YOU SUCK ASS"
        
        if (resetButtonCreated === false) {
            const reset = document.createElement("button");
            reset.innerText = "RESETEAR"
        
            body.appendChild(reset)
            resetButtonCreated = true;
            reset.addEventListener ("click", () => {
                userWins = 0;
                computerWins = 0;
                ties = 0;
                showResults();
            })
            
            }
    } 
}











