var Bob = function() {
  this.letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
};

Bob.prototype.hey = function( str ) {

  var onlyBlanks = false;
  var containsLetters = false;
  var caps = false;
  var question = false;

  str = str.trim();
  if ( str === '' ){
    onlyBlanks = true;
  }

  for ( var i = 0; i < str.length; i++ ) {
    if ( this.letters.indexOf(str.charAt(i)) > -1 ) {
      containsLetters = true;
    }
  }

  if ( containsLetters ) {
    caps = true;
    for ( var j = 0; j < str.length; j++ ) {
      if ( (this.letters.indexOf(str.charAt(j)) > -1) && (str.charAt(j) === str.charAt(j).toLowerCase()) ) {
        caps = false;
      }
    }
  }

  if ( str.charAt(str.length - 1) === '?' ) {
    question = true;
  }

  if ( onlyBlanks ) {
    return 'Fine. Be that way!';
  } else if ( caps ) {
    return 'Whoa, chill out!';
  } else if ( question ) {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;
