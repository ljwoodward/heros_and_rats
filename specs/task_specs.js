var assert = require('assert');
var Task = require('../task.js');

describe('Task', function() {

let task1;

  beforeEach(function() {
    task1 = new Task("Kill dragon",3, 4, 50);
  })

  it("should have a difficulty level", function() {
    assert.equal(3, task1.diffLevel);
  })

  it("should have an urgency level", function() {
    assert.equal(4, task1.urgLevel);
  })

  it("should have a reward", function() {
    assert.equal(50, task1.reward);
  })

  it("should be able to be marked as completed", function() {
    task1.complete();
    assert.equal(true, task1.isComplete);
  })

})
