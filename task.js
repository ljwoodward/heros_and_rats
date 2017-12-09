const Task = function(name, diffLevel, urgLevel, reward) {
  this.name = name;
  this.diffLevel = diffLevel;
  this.urgLevel = urgLevel;
  this.reward = reward;
  this.isComplete = false;
}

Task.prototype.complete = function () {
  this.isComplete = true;
};

module.exports = Task;
