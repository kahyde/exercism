var primeFactors = function(num) {

  var currentFactor = 2;
  var factors = [];
  
  while (num != 1){

    if (num % currentFactor === 0) {
      factors.push(currentFactor);
      num = num / currentFactor;
    } else {
      currentFactor++;
    }
  }

  return factors;
};

module.exports = primeFactors;
