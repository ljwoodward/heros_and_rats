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
    task1 = new Task("Clean out the latrines", 3, 4, 50);
    task2 = new Task("Buy fags", 2, 3, 30);
    task3 = new Task("Call BT", 5, 2, 40);
    food1 = new Food("Mealworms", 25);
    food2 = new Food("Donner Kebab", 10);
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
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
    hero.addTask(task1);
    assert.strictEqual(1, hero.tasks.length);
  })

  it("should not allow health to go over 100", function() {
    const newHero = new Hero("Bruno", 99, "Burger");
    newHero.eatFood(food1);
    assert.strictEqual(100, newHero.health);
  })

  it("should be able to eat food and be replenished by it", function() {
    hero.eatFood(food1);
    assert.equal(75, hero.health);
  })

  it("should get extra replenishment from favourite food", function() {
    hero.eatFood(food2);
    assert.equal(65, hero.health);
  })

  it("should be able to list tasks", function() {
    assert.equal("1. Clean out the latrines, 2. Buy fags, 3. Call BT", hero.listTasks(hero.tasks));
  })

  it("should be able to sort their tasks by difficulty, urgency or reward-- difficulty ascending", function() {
    assert.equal("1. Buy fags, 2. Clean out the latrines, 3. Call BT", hero.listTasks(hero.tasksByDifficulty("asc")));
  })

  it("should be able to sort their tasks by difficulty, urgency or reward-- difficulty descending", function() {
    assert.equal("1. Call BT, 2. Clean out the latrines, 3. Buy fags", hero.listTasks(hero.tasksByDifficulty("desc")));
  })

  it("should be able to sort their tasks by difficulty, urgency or reward-- urgency ascending", function() {
    assert.equal("1. Call BT, 2. Buy fags, 3. Clean out the latrines", hero.listTasks(hero.tasksByUrgerncy("asc")));
  })

  it("should be able to sort their tasks by difficulty, urgency or reward-- urgency descending", function() {
    assert.equal("1. Clean out the latrines, 2. Buy fags, 3. Call BT", hero.listTasks(hero.tasksByUrgerncy("desc")))
  })

  it("should be able to sort their tasks by difficulty, urgency or reward-- reward ascending", function() {
    assert.equal("1. Buy fags, 2. Call BT, 3. Clean out the latrines", hero.listTasks(hero.tasksByReward("asc")))
  })

  it("should be able to sort their tasks by difficulty, urgency or reward-- reward descending", function() {
    assert.equal("1. Clean out the latrines, 2. Call BT, 3. Buy fags", hero.listTasks(hero.tasksByReward("desc")))
  })

  it("should be able to view tasks that are marked as completed", function () {
    task1.complete();
    assert.equal("Completed Tasks: 1. Clean out the latrines", hero.completedTasks())
  })

  it("should be able to view tasks that are marked as incomplete", function () {
    task1.complete();
    assert.equal("To do: 1. Buy fags, 2. Call BT", hero.toDo())
  })



})
