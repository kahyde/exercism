var Matrix = function(input) {
  this.rowStrings = input.split('\n');
  this.rows = createRowsArray(this.rowStrings);
  this.columns = createColumnsArray(this.rows);
};

var createArray = function(rowString) {
  var arr = [];

  rowString.split(' ').forEach(function(num) {
    arr.push(+num);
  });

  return arr;
};

var createRowsArray = function(rowStrings) {
  var rowsArray = [];

  rowStrings.forEach(function(rowString) {
    var arr = createArray(rowString);
    rowsArray.push(arr);
  });

  return rowsArray;
};

var createColumnsArray = function(rowsArray) {
  var columnsArray = [];

  for (var i = 0; i < rowsArray.length; i++){
    var arr = [];
    rowsArray.forEach(function(row) {
      arr.push(row[i]);
    });
    columnsArray.push(arr);
  }

  return columnsArray;
};

module.exports = Matrix;
