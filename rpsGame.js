//Play a best of 5 game that keeps score and reports a winner or loser at the end.

game(function() {

    const newGame = document.querySelector('.newGame');
    const newGamePrompt = document.createElement('p');
    const newGameBtn = document.createElement('button');

    newGamePrompt.textContent = 'Click Here to Start a New Game:';
    newGameBtn.textContent = 'New Game';

    newGame.appendChild(newGamePrompt);
    newGame.appendChild(newGameBtn);

    newGameBtn.addEventListener('click', game);

});





function game(gameOver) {

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

    var roundCount = 0;
    var playerWin = 0;
    var computerWin = 0;

    const buttons = document.querySelectorAll('button');

    //creates multiple p within results div
    const results = document.querySelector('.results')
    const result = document.createElement('p');
    const playerWinCount = document.createElement('p');
    const computerWinCount = document.createElement('p');
    const totalRoundCount = document.createElement('p');
    const winner = document.createElement('p');


    results.appendChild(result);
    results.appendChild(playerWinCount);
    results.appendChild(computerWinCount);
    results.insertBefore(totalRoundCount, playerWinCount);
    results.appendChild(winner);

    playerWinCount.textContent = 'Player Wins: ' + playerWin;
    computerWinCount.textContent = 'Computer Wins: ' + computerWin;
    totalRoundCount.textContent = 'Round Number: ' + roundCount;


    let playerChoice;
    //determine the players move from the button press & play a round of rps when one of the buttons is pressed.
    buttons.forEach((button) => {
        button.addEventListener('click', () => playerChoice = button.id);
        button.addEventListener('click', clickPlayRound, false);
    });
    
    //function to play round and stop once the player or computer hits 5 wins.
    function clickPlayRound() {

        result.textContent = playRound(playerChoice);
        playerWinCount.textContent = 'Player Wins: ' + playerWin;
        computerWinCount.textContent = 'Computer Wins: ' + computerWin;
        totalRoundCount.textContent = 'Round Number: ' + roundCount;

        if (playerWin == 5 || computerWin == 5) {
            buttons.forEach((button) => button.removeEventListener('click', clickPlayRound, false));
            result.textContent = 'Game Over!';
            if (playerWin > computerWin) {
                winner.textContent = `Congratulations! You beat the computer ${playerWin} to ${computerWin}.`;
                gameOver();
            } else if (computerWin > playerWin) {
                winner.textContent = `Too bad! The computer won ${computerWin} to ${playerWin}.`;
                gameOver();
            }
        }
    }

    function playRound(playerChoice, computerChoice = getComputerChoice()) {
            
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