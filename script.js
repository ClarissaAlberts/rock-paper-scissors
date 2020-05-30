let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let currentRound = 0;


const resultsWindow = document.querySelector('.results');

    const rock = document.querySelector("button.rock");
    rock.addEventListener('click', function() {playerSelection = "rock"; playRound(playerSelection, computerSelection);});

    const scissors = document.querySelector("button.scissors");
    scissors.addEventListener('click', function() {playerSelection = "scissors"; playRound(playerSelection, computerSelection);});

    const paper = document.querySelector("button.paper");
    paper.addEventListener('click', function() {playerSelection = "paper"; playRound(playerSelection, computerSelection);});


    //A function that picks a random string out of three (i.e: rock, paper, or scissors)
    function computerPlay() {
        let arr = ["rock", "paper", "scissors"];
        choice = arr[Math.floor(Math.random() * arr.length)];
        return choice;
    }

  
      //A function that plays a single round of the game
    function playRound(playerSelection, computerSelection) {

      //Generates the computer's selection
      computerSelection = computerPlay();
      
        //All below if-statements compare the player and computers selections
        //It also adds 1 to the score, depending on which selection wins
        if (playerSelection === computerSelection) {
            currentRound = currentRound + 1;
            const draw = document.createElement('p');
            draw.textContent = "You chose " + playerSelection + 
          " and the computer chose " + computerSelection + ". No points for anyone.";
            resultsWindow.appendChild(draw);
        }
        
        else if (playerSelection === "rock" && computerSelection === "scissors") {
          playerScore = playerScore + 1;
            currentRound = currentRound + 1;
            const playerRockWins = document.createElement('p');
            playerRockWins.textContent = "Rock beats scissors.\n" + "You chose " + playerSelection + 
          " and the computer chose " + computerSelection + ". 1 point for you!";
            resultsWindow.appendChild(playerRockWins);
        }
        
        else if (playerSelection === "rock" && computerSelection === "paper") {
          computerScore = computerScore + 1;
            currentRound = currentRound + 1;
            const playerRockLose = document.createElement('p');
            playerRockLose.textContent = "Paper beats rock.\n" + "You chose " + playerSelection + 
          " and the computer chose " + computerSelection + ". 1 point for the computer!";
            resultsWindow.appendChild(playerRockLose);
        }
        
        else if (playerSelection === "scissors" && computerSelection === "paper") {
          playerScore = playerScore + 1;
            currentRound = currentRound + 1;
            const playerScissorsWin = document.createElement('p');
            playerScissorsWin.textContent = "Scisscors beats paper.\n" + "You chose " + playerSelection + 
          " and the computer chose " + computerSelection + ". 1 point for you!";
            resultsWindow.appendChild(playerScissorsWin);
        }
        
        else if (playerSelection === "scissors" && computerSelection === "rock") {
          computerScore = computerScore + 1;
            currentRound = currentRound + 1;
            const playerScissorsLose = document.createElement('p');
            playerScissorsLose.textContent = "Rock beats scissors.\n" + "You chose " + playerSelection + 
          " and the computer chose " + computerSelection + ". 1 point for the computer!";
            resultsWindow.appendChild(playerScissorsLose);
        }
        
        else if (playerSelection === "paper" && computerSelection === "rock") {
          playerScore = playerScore + 1;
            currentRound = currentRound + 1;
            const playerPaperWin = document.createElement('p');
            playerPaperWin.textContent = "Paper beats rock.\n" + "You chose " + playerSelection + 
          " and the computer chose " + computerSelection + ". 1 point for you!";
            resultsWindow.appendChild(playerPaperWin);
        }
        
        else if (playerSelection === "paper" && computerSelection === "scissors") {
          computerScore = computerScore + 1;
            currentRound = currentRound + 1;
            const playerPaperLose = document.createElement('p');
            playerPaperLose.textContent = "Scissors beats paper.\n" + "You chose " + playerSelection + 
          " and the computer chose " + computerSelection + ". 1 point for the computer!";
            resultsWindow.appendChild(playerPaperLose);
        }
        scoreAnnounce();
        
    }
      


//Calculates score and gives win/lose message

function scoreAnnounce() {
    if (currentRound == 5) {
    if (playerScore > computerScore) {
        const playerWon = document.createElement('h3');
        playerWon.textContent = "\nYou won!\nYour score: " + playerScore + "\nComputer's score: " + computerScore;
        resultsWindow.appendChild(playerWon);
    }
        
    else if (computerScore > playerScore) {
        const playerLost = document.createElement('h3');
        playerLost.textContent = "\nYou lost!\nYour score: " + playerScore + "\nComputer's score: " + computerScore;
        resultsWindow.appendChild(playerLost);
 }
    else {
        const playerDraw = document.createElement('h3');
        playerDraw.textContent = "\nIt's a draw!\nYour score: " + playerScore + "\nComputer's score: " + computerScore;
        resultsWindow.appendChild(playerDraw);
  }
    }

}



