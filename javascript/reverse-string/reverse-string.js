var reverseString = function(str) {
  return str.split("").reverse().join("");
};

// an option without the built in functions
var reverseString2 = function(str) {
  var newString = "";

  for (var i = str.length - 1; i >= 0; i--){
    newString += str[i];
  }

  return newString;
};

module.exports = reverseString;
