var dumpling = require('../')
var test = require('tap').test

test('convert php junk', function (t) {
  var input = require('./input')
  var output = require('./output')

  input = JSON.stringify(dumpling(input))
  output = JSON.stringify(output)

  t.equal(output, input)
  t.end()
})
