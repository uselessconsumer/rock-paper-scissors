//Play a best of 5 game that keeps score and reports a winner or loser at the end.
    //If player wins the round, add 1 to the players score
    //If computer wins the round, add 1 to the computers score
    //If there is a tie, play again.
game();

function game() {

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

    //Create variables to count the Round number, player wins and computer wins
    var roundCount;
    var playerWin;
    var computerWin;

    //Sets the round and scores to 0
    //If the player score and computer score are less than 3, keep playing
    //Once a score of 3 is reached by the computer or player end the loop
    for (roundCount = 0, playerWin = 0, computerWin = 0
        ; roundCount < 5 && playerWin < 3 && computerWin < 3
        ; ) {
        

        console.log(playRound());
        console.clear();
        console.log('Round number: ' + roundCount)
        console.log('Player wins: ' + playerWin)
        console.log('Computer win: ' + computerWin)

        //Ask the user for their move and generate computers move
        //Determine the winner of the round
        function playRound(playerChoice = prompt('Choose: Rock, Paper, or Scissors').toLowerCase().trim()
                 , computerChoice = getComputerChoice()) {

            //If there is a draw
            if (playerChoice === computerChoice) {
                return `Draw! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} ties with ${computerChoice}.`;

            } else if (playerChoice === 'rock') {
                if (computerChoice === 'paper') {
                    computerWin++;
                    roundCount++;
                    return 'You lose! Paper beats rock.'; 
                    
                } else if (computerChoice === 'scissors'); {
                    playerWin++;
                    roundCount++;
                    return 'You win! Rock beats scissors';
                }

            } else if (playerChoice === 'paper') {
                if (computerChoice === 'rock') {
                    playerWin++;
                    roundCount++;
                    return 'You win! Paper beats rock.';
                } else if (computerChoice === 'scissors'); {
                    computerWin++;
                    roundCount++;
                    return 'You lose! Scissors beats paper.';
                }

            } else if (playerChoice === 'scissors') {
                if (computerChoice === 'rock') {
                    computerWin++;
                    roundCount++;
                    return 'You lose! Rock beats scissors.';
                } else if (computerChoice === 'paper'); {
                    playerWin++;
                    roundCount++;
                    return 'You win! Scissors beat paper.';
                }
            } else {
                return 'Please enter a valid move.'
            }
        }

    }

    //Display a message to the user stating wether they won or lost the BO5
    let finalWinner = (playerWin === 3)
    ? console.log('Congratulations! You beat the computer!')
    : console.log('You lost! Better luck next time.');    
    
}



//Display the chosen moves of both the user and computer
//Prompt the user if they would like to play again:
//If no: end the program
//If yes: clear the console and run again