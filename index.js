module.exports = function (input) {
  var output = {}
  input.split(/\;/).forEach(function (str) {
    var key = str.match(/[\w]+[^\|]/)[0]
    var val = str.split(/\:/)[2].replace(/["']/g, '')
    output[key] = val
  })

  return output
}