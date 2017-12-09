const Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.talk = function() {
  return `They call me ${ this.name }`;
};

Hero.prototype.addTask = function(task) {
  this.tasks.push(task);
}


module.exports = Hero;
