var Gigasecond = function( date ) {
  this.startDate = date;
};

Gigasecond.prototype.date = function() {
  return new Date( this.startDate.valueOf() + 1e12 );
};

module.exports = Gigasecond;
