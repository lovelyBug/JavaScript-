Function.prototype.before = function(beforefn) {
  var _self = this
  return function() {
    beforefn.apply(this, arguments)
    return _self.apply(this, arguments)
  }
}

var ajax = function(type, url, param) {
  console.dir(param)
  // 发送ajax请求的代码
}

ajax('get', 'http://sssssss', { name: 'sven' })

getToken = function() {
  return 'Token'
}

var ajax = function(type, url, param) {
  param = param || {}
  param.token = getToken()
  console.dir(param)
  // 发送ajax请求的代码
}

ajax = ajax.before(function(type, uel, param) {
  param.Token = getToken()
})

ajax('get', 'http://sssssss', { name: 'sven' })
