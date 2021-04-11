//make a variable to hole the users answer
//make a variabele to hold the computers answer
// ask user to pick rock paper or scissors
//make a function that generates the coputers answer
//make a function that chooses the winner and explains what beats what
//annoucne the winner on the screen
//use the above to make a function that can play the game 5 times in a row

let ul = document.querySelector('rootlist');
let li = document.createElement('li');

function computer() {
    compAnswer = "";
    compNum = Math.floor(Math.random() * 3);
    console.log(compNum)
    if (compNum === 0) {
        compAnswer = "ROCK";
    }
    else if (compNum === 1) {
        compAnswer = "PAPER";
    } else compAnswer = "SCISSORS";
}

function winner() {
    let won = ''
    if (userAnswer === 'ROCK' && compAnswer === 'ROCK') {
        won = 'Rock and rock end in a tie';
        alert(won)
    } else if (userAnswer === 'ROCK' && compAnswer === 'PAPER') {
        won = 'Sorry you lost paper beats rock';
        alert(won)
    } else if (userAnswer === 'ROCK' && compAnswer === 'SCISSORS') {
        won = 'Congradulations you WON! Rock beats scissors';
        alert(won)
    } else if (userAnswer === 'PAPER' && compAnswer === 'ROCK') {
        won = 'Congradulation you WON! Paper beats rock';
        alert(won)
    } else if (userAnswer === 'PAPER' && compAnswer === 'PAPER') {
        won = 'Paper and paper end in a tie';
        alert(won)
    } else if (userAnswer === 'PAPER' && compAnswer === 'SCISSORS') {
        won = 'Sorry you lost becasue scissors beat paper';
        alert(won)
    } else if (userAnswer === 'SCISSORS' && compAnswer === 'ROCK') {
        won = 'Sorry you lost because Rock beats scissors';
        alert(won)
    } else if (userAnswer === 'SCISSORS' && compAnswer === 'PAPER') {
        won = 'Congradulations you won becasue scissors beat paper';
        alert(won)
    } else if (userAnswer === 'SCISSORS' && compAnswer === 'SCISSORS') {
        won = 'You tied becasue scissors dont beat scissors';
        alert(won)
    }

}

function playGame() {
    let num = prompt('please chosse how many times you would like to play.')
    for (i = 0; i < num; i++) {
        userAnswer = prompt("Please choose Rock Paper or Scissor.");
        userAnswer = userAnswer.toUpperCase();
        computer();
        winner();
    }
}
playGame();