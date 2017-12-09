var assert = require('assert');
var Hero = require('../hero.js');

describe('Hero', function() {

  let hero;
  let task1;
  // - A Hero has a name
  // - A Hero has health
  // - A Hero has a favourite food
  // - A Hero can talk saying their name
  // - A Hero has a collection of tasks to complete
  beforeEach(function() {
    hero = new Hero("Duncan the Magnificent", 100, "Donner Kebab");
    task = new Task(3, 4, 50);
    hero.addTask(task1);
  })

  it("should have a name", function() {
    assert.equal("Duncan the Magnificent", hero.name);
  })

  it("should have health", function() {
    assert.equal(100, hero.health);
  })

  it("should have a favourite food", function() {
    assert.equal("Donner Kebab", hero.favouriteFood);
  })

  it("should be able to talk", function() {
    assert.equal("They call me Duncan the Magnificent", hero.talk());
  })

  xit("should be able to add a task", function() {
    assert.strictEqual(1, hero.tasks.length);
  })

})
