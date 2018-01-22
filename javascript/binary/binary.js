var Binary = function(binary) {
  this.digits = binary.trim().toLowerCase().split('').reverse();
  this.len = this.digits.length;

  this.validDigits = ['0', '1'];
};

Binary.prototype.toDecimal = function() {
  var sum = 0;

  for (var i = 0; i < this.len; i++) {
    if (!(this.validDigits.includes(this.digits[i]))){
      return 0;
    } else {
      sum += (this.digits[i] * Math.pow(2, i));
    }
  }
  return sum;
}

module.exports = Binary;
