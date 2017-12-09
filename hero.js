const Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.talk = function() {
  return `They call me ${ this.name }`;
};

Hero.prototype.addTask = function(task) {
  this.tasks.push(task);
}

Hero.prototype.eatFood = function (food) {
  if (food.name === this.favouriteFood) {
    this.health += (food.replenValue * 1.5);
  } else {
    this.health += food.replenValue;
  }

  if (this.health > maxHealth) {
    this.health = maxHealth;
  }
};

Hero.prototype.tasksByDifficulty = function (ascDesc) {
  let tasksOrder = this.tasks.sort(function(a, b){
    return a.diffLevel < b.diffLevel;
  })
  if (ascDesc === "asc") {
    tasksOrder.reverse();
  }
  return tasksOrder;
};

Hero.prototype.tasksByUrgerncy = function (ascDesc) {
  let tasksOrder = this.tasks.sort(function(a, b){
    return a.urgLevel < b.urgLevel;
  })
  if (ascDesc === "asc") {
    tasksOrder.reverse();
  }
  return tasksOrder;
};

Hero.prototype.tasksByReward = function (ascDesc) {
  let tasksOrder = this.tasks.sort(function(a, b){
    return a.reward < b.reward;
  })
  if (ascDesc === "asc") {
    tasksOrder.reverse();
  }
  return tasksOrder;
};

Hero.prototype.listTasks = function (taskArray) {
  let list = "";
  for (var i = 0; i < taskArray.length; i++) {
    if (i !== (taskArray.length -1)) {
      list += `${(i + 1)}. ${taskArray[i].name}, `;
    }
    else {
      list += `${i + 1}. ${taskArray[i].name}`;
    }
  };
  return list;
};


const maxHealth = 100;


module.exports = Hero;
