var CreateDiv = function(html) {
  this.html = html
  this.init()
}

CreateDiv.prototype.init = function() {
  var div = document.createElement('div')
  div.innerHTML = this.html
  document.appendChild(div)
}

var ProxySingleCreateDiv = (function() {
  var instance
  return function(html) {
    if(!instance) {
      instance = new CreateDiv(html)
    }
    return instance
  }
}())