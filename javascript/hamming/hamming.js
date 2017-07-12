var Hamming = function() {};

Hamming.prototype.compute = function(stringOne, stringTwo) {
  var count = 0;
  var length = stringOne.length;
  if (length !== stringTwo.length){
    throw new Error('DNA strands must be of equal length.');
  }
  for (var i = 0; i < length; i++){
    if (stringOne[i] !== stringTwo[i])
      count++;
  }
  return count;
};

module.exports = Hamming;
