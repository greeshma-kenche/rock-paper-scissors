let humanMove = '';
let computerMove = '';
let result = '';
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

document.querySelector('.js-score').innerHTML = `Score - 👨 ${playerScore} | 🤖 ${computerScore} | 🤝 ${tieScore}`;

function playGame(humanMove) {
    const outcomes = {
        rock: { rock: 'TIE', paper: 'LOSE', scissors: 'WIN' },
        paper: { rock: 'WIN', paper: 'TIE', scissors: 'LOSE' },
        scissors: { rock: 'LOSE', paper: 'WIN', scissors: 'TIE' }
    };
    computerMove = Math.random();
    if(computerMove >= 0 && computerMove < 1/3)
    {
        computerMove = 'rock';
    }
    else if(computerMove >= 1/3 && computerMove < 2/3) 
    {
        computerMove = 'paper';
    }
    else {
        computerMove = 'scissors';
    }
    result = outcomes[humanMove][computerMove];
    if (result === 'WIN') playerScore++;
else if (result === 'LOSE') computerScore++;
else tieScore++;

document.querySelector('.js-score').innerHTML = `Score - 👨 ${playerScore} | 🤖 ${computerScore} | 🤝 ${tieScore}`;
document.querySelector('.js-result').innerHTML = `👨 - ${humanMove} 🤖 - ${computerMove}. ${result}!`;

}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    document.querySelector('.js-score').innerHTML = `Score - 👨 ${playerScore} | 🤖 ${computerScore} | 🤝 ${tieScore}`;
    document.querySelector('.js-result').innerHTML = '';
}
