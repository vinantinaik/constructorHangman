

var Letter = require("./Letter.js");


module.exports = function Word(currentWord, guessesLeft) {

    this.guessesLeft = guessesLeft;
    this.currentWord= currentWord;
    this.letterArr = currentWord.split("");
    this.letters = [];
    for (var i = 0; i < this.letterArr.length; i++) {
        var letter = new Letter(this.letterArr[i], false)
        this.letters.push(letter);
    }


    this.getWord = function () {
        var rtnString = "";

        for (var i = 0; i < this.letters.length; i++) {
            rtnString = rtnString + " " + this.letters[i].getLetter();

        }

        return rtnString;
    }

    this.validateGuess = function (chr) {

        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].guessLetter(chr)

        }

    }

    this.allGuessed = function () {
        var rtn = false;
        for (var i = 0; i < this.letters.length; i++) {
            // console.log(i);
            if (this.letters[i].hasGuessed) {
                rtn = true;
            }
            else {
                return false;
            }

        }

        return rtn;
    }

    this.correctGuess = function (guess) {
        if (this.currentWord.toLowerCase().indexOf(guess.toLowerCase()) >= 0) {
            return true;
        }
        else {
            this.guessesLeft-=1;
            return false;
            
        }

    }
}




