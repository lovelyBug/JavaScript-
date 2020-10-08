var myImage = (function() {
  var imageNode = document.createElement('img')
  document.body.appendChild(imageNode)
  return {
    setSrc: function(src) {
      imageNode.src = src
    }
  }
})()

var proxyImage = (function() {
  var img = new Image()
  img.onload = function() {
    myImage.setSrc(this.src)
  }
  return {
    setSrc: function(src) {
      myImage.setSrc('file:// /C:USers/....gif')
      img.src = src
    }
  }
})()

proxyImage.setSrc('http://image.qq.com/...jpg')
