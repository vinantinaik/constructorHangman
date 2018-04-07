function Letter(chr, hasGuessed) {
    this.chr = chr;
    this.hasGuessed = hasGuessed;

    this.getLetter = function () {

        if (this.hasGuessed) {
            return this.chr;

        }
        else {
            return "_";
        }

    }

    this.guessLetter = function (guess) {
        if (guess.trim() === this.chr.trim()) {
            this.hasGuessed = true;
        }
        else {
            this.hasGuessed = false;
        }

    }

}

var myLetter = new Letter("a",false);
myLetter.guessLetter("k");
console.log(myLetter.getLetter());