var iteratorUploadObj = function() {
  for (let i = 0, fn; fn = arguments[i++];) {
    var uploadObj = fn()
    if(uploadObj !== false) {
      return uploadObj
    }
  }
}

var uploadObj = iteratorUploadObj(getActiveUploadObj, getFlashUploadObj, getFormUploadObj)