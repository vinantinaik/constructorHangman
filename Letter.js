module.exports = function Letter(chr, hasGuessed) {
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

        if (guess.toLowerCase() === this.chr.toLowerCase()) {

            this.hasGuessed = true;
        }




    }

}

