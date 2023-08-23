//Play a best of 5 game that keeps score and reports a winner or loser at the end.






game();

function game() {

    //Generate the computers choice: rock, paper, or scissors

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

    // for (roundCount = 0, playerWin = 0, computerWin = 0
    //     ; roundCount < 5 && playerWin < 3 && computerWin < 3
    //     ; ) {
    //         console.log('Round number: ' + roundCount);
    //         console.log('Player wins: ' + playerWin);
    //         console.log('Computer win: ' + computerWin);
    //     };

    var roundCount = 0;
    var playerWin = 0;
    var computerWin = 0;

    const buttons = document.querySelectorAll('button');

    const results = document.querySelector('.results')
    const result = document.createElement('p');
    const playerWinCount = document.createElement('p');
    const computerWinCount = document.createElement('p');
    const totalRoundCount = document.createElement('p');


    results.appendChild(result);
    results.appendChild(playerWinCount);
    results.appendChild(computerWinCount);
    results.insertBefore(totalRoundCount, playerWinCount);

    playerWinCount.textContent = 'Player Wins: ' + playerWin;
    computerWinCount.textContent = 'Computer Wins: ' + computerWin;
    totalRoundCount.textContent = 'Round Number: ' + roundCount;


    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            result.textContent = playRound(button.id)
            playerWinCount.textContent = 'Player Wins: ' + playerWin;
            computerWinCount.textContent = 'Computer Wins: ' + computerWin;
            totalRoundCount.textContent = 'Round Number: ' + roundCount;
        });
    });

    


    function playRound(playerChoice, computerChoice = getComputerChoice()) {
            
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

    //Display a message to the user stating wether they won or lost the BO5
    // let finalWinner = (playerWin === 3)
    // ? console.log(`Congratulations! You beat the computer! ${playerWin} to ${computerWin}!`)
    // : console.log(`You lost ${playerWin} to ${computerWin}. Better luck next time!`);    
    
}