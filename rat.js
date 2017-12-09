const Rat = function() {

}

Rat.prototype.touchFood = function (food) {
  food.isPoisonous = true;
};

module.exports = Rat;
