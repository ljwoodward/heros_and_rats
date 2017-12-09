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

Hero.prototype.eatFood = function (food) {
  if (food.name === this.favouriteFood) {
    this.health += (food.replenValue * 1.5);
  } else {
    this.health += food.replenValue;
  }

  if (this.health > maxHealth) {
    this.health = maxHealth;
  }
};

const maxHealth = 100;


module.exports = Hero;
