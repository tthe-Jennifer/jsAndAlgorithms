//console.log('hi');
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
      if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
      } else {
        console.log("404 error, invalid choice")
      }
    };
     // console.log(getUserChoice('scissors'));
    //the above to get user choice either rock paper or scissors
    
    const getComputerChoice = () => {
    randomNumber =  Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return 'rock';
    } else if (randomNumber === 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
    };
    //console.log(getComputerChoice());
    //the above to get computer random selection
    
    const determineWinner = (userChoice, computerChoice) => {
      if (userChoice === computerChoice) {
        return 'this round is a tie';
      }
      if (userChoice === 'bomb') {
      if (computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors') {
          return 'Bombed! user win';
    }
    }
      if (userChoice === 'rock' ) {
        if (computerChoice === 'paper'){
              return 'The computer won';
        } else {
          return 'You won!';
        }
      } 
      if (userChoice === 'paper') {
      if (computerChoice === 'scissors' || computerChoice === 'rock') {
        return 'Winner';
      }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock' || computerChoice === 'paper') {
        return 'winner';
      }
    }
    
    }
    }
    //console.log(determineWinner())
    //to compare and determine winner based on each selection
    
    const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log(`you threw: ${userChoice}`);
    console.log('computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
    }
    playGame();
    
    