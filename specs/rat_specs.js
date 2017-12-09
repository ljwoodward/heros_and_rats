var assert = require('assert');
var Rat = require('../rat.js');
var Food = require('../food.js');

describe('Rat', function() {

  let rat;
  let food1;

  beforeEach(function () {
    rat = new Rat();
    food1 = new Food("Mashed Potatoes", 5);
  })
  // - Create a constructor to create Rat objects.
  // - Rats should be able to touch food,  if they do the food becomes poisonous.
  it("should be able to touch food", function () {
    rat.touchFood(food1);
    assert.strictEqual(true, food1.isPoisonous);
  })


})
