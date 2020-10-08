function EventHub() {
  const self = this
  self.cache = {}

  function on(eventName, callback) {
    self.cache[eventName] = self.cache[eventName] || []
    self.cache[eventName].push(callback)
  }

  function emit(eventName) {
    if(self.cache[eventName]) {
      self.cache[eventName].forEach(fn => fn())
    }
  }

  function off(eventName, fn) {
    if(self.cache[eventName]) {
      const index = self.cache[eventName].indexOf(fn)
      if(index === -1) {
        return
      }
      self.cache[eventName].splice(index, 1)
    }
  }

}