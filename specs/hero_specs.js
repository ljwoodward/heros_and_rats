var assert = require('assert');
var Hero = require('../hero.js');
var Task = require('../task.js');
var Food = require('../food.js');

describe('Hero', function() {

  let hero;
  let task1;
  let food1;
  let food2;

  beforeEach(function() {
    hero = new Hero("Duncan the Magnificent", 50, "Donner Kebab");
    task = new Task(3, 4, 50);
    food1 = new Food("Mealworms", 25);
    food2 = new Food("Donner Kebab", 10);
    hero.addTask(task1);
  })

  it("should have a name", function() {
    assert.equal("Duncan the Magnificent", hero.name);
  })

  it("should have health", function() {
    assert.equal(50, hero.health);
  })

  it("should have a favourite food", function() {
    assert.equal("Donner Kebab", hero.favouriteFood);
  })

  it("should be able to talk", function() {
    assert.equal("They call me Duncan the Magnificent", hero.talk());
  })

  it("should be able to add a task", function() {
    assert.strictEqual(1, hero.tasks.length);
  })

  // - A hero should be able to eat food, and health should go up by the replenishment value
  // - If the food is their favourite food, their health should go up by 1.5 * value.
  // - A hero should be able to sort their tasks by difficulty, urgency or reward.
  // - A hero should be able to view tasks that are marked as completed or incomplete.

  it("should be able to eat food and be replenished by it", function() {
    hero.eatFood(food1);
    assert.equal(75, hero.health);
  })

  it("should get extra replenishment from favourite food", function() {
    hero.eatFood(food2);
    assert.equal(65, hero.health);
  })

})
