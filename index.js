var postcss = require('postcss')

module.exports = postcss.plugin('postcss-pxto2rpx', function (opts) {
  opts = opts || {}

   var timesBigger = opts.times || 2

  // Work with options here

  return function(root) {

    // Transform CSS AST here
    root.walkDecls(decl => {
      var val = decl.value
      if (val.toLowerCase().indexOf('px') > -1) {
        decl.value = val.replace(/(\d+)px$|(\d+)px\s/g, function(match, num, num2) {
          var px2 = num !== undefined ? num * timesBigger + 'rpx' : num2 * timesBigger + 'rpx '
          return px2
        })
      }
    })
  }
})
