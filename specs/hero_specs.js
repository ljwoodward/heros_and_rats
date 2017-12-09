var assert = require('assert');
var Hero = require('../hero.js');

describe('Hero', function() {

  let hero;
  // - A Hero has a name
  // - A Hero has health
  // - A Hero has a favourite food
  // - A Hero can talk saying their name
  // - A Hero has a collection of tasks to complete
  beforeEach(function() {
    hero = new Hero("Duncan the Magnificent", 100, "Donner Kebab");
  })

  it("should have a name", function() {
    assert.equal("Duncan the Magnificent", hero.name);
  })

  xit("should have health", function() {
    assert.equal(100, hero.health);
  })

  xit("should have a favourite food", function() {
    assert.equal("Donner Kebab", hero.favouriteFood);
  })

})
