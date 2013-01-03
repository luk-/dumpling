var dumpling = require('../')
var test = require('tape')

typeof JSON === 'undefined' && (JSON = require('jsonify'))

test('convert php junk', function (t) {
  var input = require('./input')
  var output = require('./output')

  input = JSON.stringify(dumpling(input))
  output = JSON.stringify(output)

  t.equal(output, input)
  t.end()
})
