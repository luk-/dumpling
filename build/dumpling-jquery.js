;(function (jQuery) {
  var $dumpling = jQuery.dumpling = function (input) {
    var output = {}
    input.split(/\;/).forEach(function (str) {
      if (str.length === 0) return
      var key = str.match(/[\w]+[^\|]/)[0]
      var val = str.split(/\:/)[2].replace(/["']/g, '')
      output[key] = val
    })
    return output
  }
})(jQuery)