var before = function(fn, beforefn) {
  return function() {
    beforefn.apply(this, arguments)
    return fn.apply(this, arguments)
  }
}

var after = function(fn, afterfn) {
  return function() {
    var ret = fn.apply(this, arguments)
    afterfn.apply(this, arguments)
    return ret
  }
}

var a = function() {
  console.log(1)
}

var b = function() {
  console.log(2)
}

var c = function() {
  console.log(3)
}

var test = after(a, b)

test = after(test, c)

test()
