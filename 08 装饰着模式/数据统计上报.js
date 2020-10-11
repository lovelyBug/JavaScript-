<html>
  <button id="button">点击打开登录浮层</button>
</html>

Function.prototype.after = function(afterfn) {
  var _self = this
  return function() {
    var ret = _self.apply(this, arguments)
    afterfn.apply(this, arguments)
    return ret
  }
}

var showLogin = function() {
  console.log('打开登录弹窗')
}

var log = function() {
  console.log('上报标签')
}

showLogin = showLogin.after(log)

document.getElementById('button').onclick = showLogin