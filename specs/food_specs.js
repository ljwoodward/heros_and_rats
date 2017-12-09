var assert = require('assert');
var Food = require('../food.js');

describe('Food', function() {

let food1;

  beforeEach(function() {
    food1 = new Food("Donner Kebab", 10);
  })

  it("should have a name", function() {
    assert.equal("Donner Kebab", food1.name);
  })

  it("should have a replenishment value", function() {
    assert.equal(10, food1.replenValue);
  })

});
