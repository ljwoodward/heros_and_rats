var assert = require('assert');
var Task = require('../food.js');

describe('Food', function() {

let food1;

  beforeEach(function() {
    food1 = new Food("Donner Kebab", 15);
})

  it("should have a name", function() {
    assert.equal("Donner Kebab", food1.name);
  })

  it("should have a replenishment value", function() {
    assert.equal(15, food1.replenValue);
  })

})
