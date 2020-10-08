var each = function(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i)
  }
}

each([1,2,3], function(item, i) {
  console.log(item)
})