var Pangram = function(sentence){
  this.ascii = sentence.toLowerCase().split("").map(function(x) {
   return x.charCodeAt(0);
  });
}

Pangram.prototype.isPangram = function() {
  if (this.ascii.length < 26){
    return false;
  }
  for (var i = 97; i < 123; i++) {
    if (this.ascii.indexOf(i) === -1) {
      return false;
    }
  }
  return true;
}

module.exports = Pangram;
