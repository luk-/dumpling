var dumpling = require('../')
var test = require('tap').test
var fs = require('fs')

test('convert php junk', function (t) {
  var input = fs.createReadStream('input.txt', {encoding: 'utf8'})

  input.on('data', function (input) {
    var input = dumpling(input)
    
    var output = fs.createReadStream('output.json', {encoding: 'utf8'})
    output.on('data', function (output) {
      t.equal(output, JSON.stringify(input))
      t.end()

    })
  })
})