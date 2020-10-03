
exports.min = function min (array) {
  let arr = arguments.length == 0 || array.length == 0 ? [0] : array
  arr.sort((a, b) => a-b)
  return arr[0];
}

exports.max = function max (array) {
  let arr = arguments.length == 0 || array.length == 0 ? [0] : array
  arr.sort((a, b) => b - a)
  return arr[0];
  return 0;
}

exports.avg = function avg (array) {
  let arr = arguments.length == 0 || array.length == 0 ? [0] : array
  let accumulator = 0 
  arr.forEach(element => {
      accumulator += element
  })    
  return arr.length == 0 ? 0 : accumulator/arr.length
}
