// Ask the user for their choice: rock, paper, or scissors
//Generate the computers choice: rock, paper, or scissors
//Evaluate the choice hierarchy:
    //Rock beats scissors
    //Scissors beats paper
    //Paper beats rock
//Compare user and computers move choice
    //Determine winner
//State who has won or if there is a tie
//Display the chosen moves of both the user and computer
//Prompt the user if they would like to play again:
//If no: end the program
//If yes: clear the console and run again



//Generate the computers choice: rock, paper, or scissors
    //Generate a number between 0 to 2
        //Assign 0 to rock
        //Assign 1 to paper
        //Assign 2 to scissors


let playerChoice;
let computerChoice = getComputerChoice();

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice === 0) {
        return 'rock';
    } else if (randomChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}



console.log(computerChoice);
