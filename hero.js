const Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
}

Hero.prototype.talk = function () {
  return `They call me ${ this.name }`;
};


module.exports = Hero;
