var SingleLeton = function(name) {
  this.name = name
}

SingleLeton.prototype.getName = function() {
  alert(this.name)
}

SingleLeton.getInstance = (function() {
  var instance = null
  return function(name) {
    if(!instance) {
      instance = new SingleLeton(name)
    }
    return instance
  }
}())