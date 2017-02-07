function LazyMan(name) {
  return new _lazyman(name);
}

function _lazyman(name) {
  this.task = [];
  var that = this;

  var fn = (function(name){
    return function() {
      console.log("Hi! This is " + name + "!");
      that.next();
    }
  })(name);

  this.task.push(fn);

  setTimeout(function() {that.next();}, 0);
}

_lazyman.prototype = {
  constructor: _lazyman,

  next: function() {
    var fn = this.task.shift();
    fn&&fn();
  },

  sleep: function(time) {
    var that = this;
    var fn = (function(time){
      return function() {
        console.log("Wake up after " + time);
        setTimeout(
          function() {
            that.next();
          },
          time
        );
      }
    })(time);

    this.task.push(fn);

    return this; // 实现链式调用
  },

  sleepfirst: function(time) {
    var that = this;
    var fn = (function(time){
      return function() {
        console.log("Wake up after " + time);
        setTimeout(
          function() {
            that.next();
          },
          time
        );
      }
    })(time);

    this.task.unshift(fn);

    return this; // 实现链式调用
  },

  eat: function(something) {
    var that = this;
    var fn = (function(something){
      return function() {
        console.log("Eat " + something);
        that.next();
      }
    })(something);

    this.task.push(fn);

    return this; // 实现链式调用
  }
}

LazyMan("Joe").sleepfirst(3000).eat("breakfast").sleep(1000).eat("dinner");
// LazyMan("Joe").sleep(1000).eat("dinner");