// 创建对象和管理单例的职责被分布在两个不同的方法中，这两个方法组合起来才具有单例模式的威力

// 管理单例
var getSingle = function(fn) {
  var result
  return function() {
    return result || (result = fn.apply(this, arguments))
  }
}

// 创建对象
var bindEvent = getSingle(function(num) {
  return num
})

console.log(bindEvent(2))
console.log(bindEvent(3))
