var Isogram = function(word) {
  this.letters = word.trim().toLowerCase().split('');
  this.len = this.letters.length;
  this.alphabet = 'abcdefghijklmnopqrstuvwxyzàé';
};

Isogram.prototype.isIsogram = function() {
  var letter;

  for ( var i = 0; i < this.len; i++ ) {
    letter = this.letters.pop();
    if ( this.alphabet.indexOf(letter) > -1 && this.letters.indexOf(letter) !== -1 ) {
      return false;
    }
  }
  return true;
};

module.exports = Isogram;
