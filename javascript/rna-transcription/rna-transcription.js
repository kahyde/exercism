var DnaTranscriber = function() {
  this.map = new Object();
  this.map["G"] = "C";
  this.map["C"] = "G";
  this.map["T"] = "A";
  this.map["A"] = "U";
}

DnaTranscriber.prototype.validateDnaInput = function(input) {
  for (var i = 0; i < input.length; i++){
    if (!(input[i] in this.map)){
      return false;
    }
  }
  return true;
}

DnaTranscriber.prototype.toRna = function(dna) {
  if (this.validateDnaInput(dna)){
    var rna = "";
    for (var i = 0; i < dna.length; i++){
      rna += this.map[dna[i]];
    }
    return rna;
  } else {
    throw new Error("Invalid input");
  }
}

module.exports = DnaTranscriber;
