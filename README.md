Dumpling
========

Sometimes you have to deal with things like serialized PHP sessions in
Javascript apps, because I guess PHP still is a thing in parts of the world.

Dumpling unserializes the PHP session string into a Javascript object. 
There is currently not any support for recursion.

###Usage
#####Server-side
```javascript
var dumpling = require('dumpling')
var serial = 'some awful serialized php session'
var output = dumpling(serial)
```

#####Client-side
The server-side syntax above is also supported in [Ender](https://github.com/ender-js) for client-side usage.

If you are using the global `$` object in Ender, you can also do the following:

```javascript
var output = $.dumpling(string)
```

###Testing
`npm test`

###License
MIT/X11

*Note*: this module is titled dumpling because I was eating Chinese food when I wrote it.