var SpaceAge = function(seconds) {
  this.seconds = seconds;

  //Earth: orbital period 365.25 Earth days, or 31557600 seconds
  this.ageOnEarth = this.seconds / 31557600
};

SpaceAge.prototype.onEarth = function() {
  return Number(this.ageOnEarth.toFixed(2));
};

SpaceAge.prototype.onMercury = function() {
  //Mercury: orbital period 0.2408467 Earth years
  return Number((this.ageOnEarth / 0.2408467).toFixed(2));
};

SpaceAge.prototype.onVenus = function() {
  //Venus: orbital period 0.61519726 Earth years
  return Number((this.ageOnEarth / 0.61519726).toFixed(2));
};

SpaceAge.prototype.onMars = function() {
  //Mars: orbital period 1.8808158 Earth years
  return Number((this.ageOnEarth / 1.8808158).toFixed(2));
};

SpaceAge.prototype.onJupiter = function() {
  //Jupiter: orbital period 11.862615 Earth years
  return Number((this.ageOnEarth / 11.862615).toFixed(2));
};

SpaceAge.prototype.onSaturn = function() {
  //Saturn: orbital period 29.447498 Earth years
  return Number((this.ageOnEarth / 29.447498).toFixed(2));
};

SpaceAge.prototype.onUranus = function() {
  //Uranus: orbital period 84.016846 Earth years
  return Number((this.ageOnEarth / 84.016846).toFixed(2));
};

SpaceAge.prototype.onNeptune = function() {
  //Neptune: orbital period 164.79132 Earth years
  return Number((this.ageOnEarth / 164.79132).toFixed(2));
};

module.exports = SpaceAge;
