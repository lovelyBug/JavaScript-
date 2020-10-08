var mult = function() {
  var a = 1
  for (let i = 0; i < arguments.length; i++) {
    a = a * arguments[i]
  }
  return a
}

var plus = function() {
  var a = 1
  for (let i = 0; i < arguments.length; i++) {
    a = a + arguments[i]
  }
  return a
}

var createProxyFactory = function(fn) {
  var cache = {}
  return function() {
    var args = Array.prototype.join.call(arguments, ',')
    if(args in cache) {
      return cache[args]
    }
    return cache[args] = fn.apply(this, arguments)
  }
}

var proxyMult = createProxyFactory(mult)
var proxyPlus = createProxyFactory(plus)

console.log(proxyMult(1,2,3,4))
console.log(proxyMult(1,2,3,4))
console.log(proxyPlus(1,2,3,4))
console.log(proxyPlus(1,2,3,4))