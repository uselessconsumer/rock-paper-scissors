

console.log(playRound());

//Generate the computers choice: rock, paper, or scissors
    //Generate a number between 0 to 2
        //Assign 0 to rock
        //Assign 1 to paper
        //Assign 2 to scissors
//Assign the result to variable computerChoice

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
// Ask the user for their choice: rock, paper, or scissors
//Compare user and computers move choice
    //Determine winner
//State who has won or if there is a tie

function playRound(playerChoice = prompt('Choose: Rock, Paper, or Scissors').toLowerCase().trim()
         , computerChoice = getComputerChoice()) {

    if (playerChoice === computerChoice) {
        return `Draw! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} ties with ${computerChoice}.`;

    } else if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'You lose! Paper beats rock.';
        } else if (computerChoice === 'scissors'); {
            return 'You win! Rock beats scissors';
        }

    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'You win! Paper beats rock.';
        } else if (computerChoice === 'scissors'); {
            return 'You lose! Scissors beats paper.';
        }

    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'You lose! Rock beats scissors.';
        } else if (computerChoice === 'paper'); {
            return 'You win! Scissors beat paper.';
        }
    }
}

//Display the chosen moves of both the user and computer
//Prompt the user if they would like to play again:
//If no: end the program
//If yes: clear the console and run again