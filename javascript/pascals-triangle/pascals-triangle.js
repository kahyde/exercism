var Triangle = function(numRows) {
  this.rows = this.createRows(numRows);
  this.lastRow = this.rows[numRows - 1];
};

Triangle.prototype.createRows = function(numRows) {
  var rows = [];

  rows.push([1]);

  if (numRows > 1) {
    rows.push([1,1]);

    if (numRows > 2) {
      for (var i = 1; i < numRows - 1; i++){
        var row = [];
        var previousRow = rows[i];

        row.push(1);
        for (var j = 1; j <= i; j++) {
          row.push(previousRow[j-1] + previousRow[j]);
        }
        row.push(1);
        rows.push(row);
      }

    }
  }
  return rows;
};

module.exports = Triangle;
