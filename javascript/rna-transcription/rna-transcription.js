var DnaTranscriber = function() {
  this.map = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };
};

DnaTranscriber.prototype.toRna = function(dna) {
    var rna = "";
    for (var i = 0; i < dna.length; i++){
      if (dna[i] in this.map){
        rna += this.map[dna[i]];
      } else {
        throw new Error("Invalid input");
      }
    }
    return rna;
};

module.exports = DnaTranscriber;
