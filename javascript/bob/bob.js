var Bob = function(){
    this.letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
}

Bob.prototype.hey = function(str){

  var onlyBlanks = false;
  if (str.trim() === ''){
    onlyBlanks = true;
  }

  var containsLetters = false;
  for (var x = 0; x < str.length; x++) {
    if (this.letters.indexOf(str.charAt(x)) > -1) {
      containsLetters = true;
    }
  }

  var caps = false;
  if (containsLetters) {
    caps = true;
    for (var x = 0; x < str.length; x++) {
      if ((this.letters.indexOf(str.charAt(x)) > -1) && (str.charAt(x) === str.charAt(x).toLowerCase())){
        caps = false;
      }
    }
  }

  var question = false;
  str = str.trim();
  if (str.charAt(str.length - 1) === '?') {
    question = true;
  }

  if (onlyBlanks) {
    return 'Fine. Be that way!';
  } else if (caps) {
    return 'Whoa, chill out!';
  } else if (question) {
    return 'Sure.';
  } else {
      return 'Whatever.';
  }
}

module.exports = Bob;