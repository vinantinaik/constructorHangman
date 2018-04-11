var Word = require("./Word.js");
var inquirer = require("inquirer");

var wordBank = ['United States', 'Italy', 'India', 'Germany', 'Brazil', 'Australlia', 'France'];

var wordToGuess ;


console.log("Welcome to Hangman game of guessing country names!!!");



var startGame = function(){
    var w = Math.floor(Math.random() * wordBank.length);
    wordToGuess = new Word(wordBank[w],wordBank[w].length-1);
    console.log(wordToGuess.getWord());
    console.log();
    playGame();
}


var playGame = function () {
    inquirer.prompt([
        {
            name: "letter",
            message: "Guess a letter"

        }

    ]).then(function (answer) {

        wordToGuess.validateGuess(answer.letter);
        if(wordToGuess.correctGuess(answer.letter))
        {
            console.log("\n"+"Correct!!!");
        }
        else{
            console.log("\n"+"incorrect!!!");
        }
        console.log(wordToGuess.getWord());


        if (wordToGuess.allGuessed()) {
            console.log("You got it right!!! Starting new word\n");
            startGame();
        }
        else if(wordToGuess.guessesLeft > 0) {
            console.log(`Guesses left : ${wordToGuess.guessesLeft}`)
            console.log();
            playGame();
        }
        else{
            console.log("You lost!!!");
        }

    })
}

startGame();





