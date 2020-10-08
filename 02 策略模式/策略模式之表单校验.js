<html>
  <body>
    <form action="http://xxx.com" id="registerForm" method="post">
      请输入用户名：<input type="text" name="userName"/>
      请输入密码：<input type="password" name="password"/>
      请输入手机号码：<input type="text" name="phoneNumber"/>
      <button>提交</button>
    </form>
  </body>
</html>

var strategies = {
  isNonEmpty: function(value, errorMsg) {
    if(value === '') {
      return errorMsg
    }
  },
  minLength: function(value, length, errorMsg) {
    if(value.length < length) {
      return errorMsg
    }
  },
  isMobile: function(value, errorMsg) {
    if(!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg
    }
  }
}

var Validator = function() {
  this.cache = []
}

Validator.prototype.add = function(dom, rules) {
  var self = this
  for(let i = 0, rule; rule = rules[i++]; ){
    var strategyAry = rule.strategy.split(':')
    var errorMsg = rule.errorMsg
    self.cache.push(
      function() {
        var strategy = strategyAry.shift()
        strategyAry.unshift(dom.value)
        strategyAry.push(errorMsg)
        return strategies[strategy].apply(dom, strategyAry)
      }
    )
  }
}

Validator.prototype.start = function() {
  for(let i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
    var errorMsg = validatorFunc()
    if(errorMsg) {
      return errorMsg
    }
  }
}

var registerForm = document.getElementById('registerForm')
var validataFunc = function() {
  var validator = new Validator()
  validator.add(registerForm.userForm, [
    {
      strategy: 'isNonEmpty',
      errorMsg: '用户名不能为空'
    },
    {
      strategy: 'minLength:10',
      errorMsg: '用户名长度不能小于10位'
    }
  ])

  var errorMsg = validator.start()
  return errorMsg
}

registerForm.onsubmit = function() {
  var errorMsg = validataFunc()
  if(errorMsg) {
    alert(errorMsg)
    return false
  }
}
