var BeerSong = function() {};

BeerSong.prototype.verse = function( num ) {
  var initial = num + ' bottles';
  var repetition = num + ' bottles';
  var remaining = (num - 1) + ' bottles';
  var message = 'Take one down and pass it around, ';

  if ( num === 0 ) {
    initial = 'No more bottles';
    repetition = 'no more bottles';
    remaining = '99 bottles';
    message = 'Go to the store and buy some more, ';
  }

  if ( num === 1 ) {
    initial = num + ' bottle';
    repetition = num + ' bottle';
    remaining = 'no more bottles';
    message = 'Take it down and pass it around, ';
  }

  if ( num === 2 ) {
    remaining = (num - 1) + ' bottle';
  }

  return initial + ' of beer on the wall, ' + repetition + ' of beer.\n' + message + remaining + ' of beer on the wall.\n';
};

BeerSong.prototype.sing = function( start, end ) {
  var times = ( end == null ) ? start - 0 : start - end;
  var song = '';

  for ( var i = times; i > 0; i-- ) {
    song = song + this.verse(start) + '\n';
    start--;
  }

  song = song + this.verse(start);
  return song;
};

module.exports = BeerSong;
