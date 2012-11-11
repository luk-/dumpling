Dumpling
========

Sometimes you have to deal with crappy things like serialized PHP sessions in
your node app, because I guess PHP is still a thing (seriously).

Dumpling unserializes it. There's no way to put it back, and there probably will
never be. Sorry about that. There's also no recursion (fyi).

Anyway...

###Usage

```javascript
var dumpling = require('dumpling')

var serial = 'some awful serialized php session'

var output = dumpling(serial)
```

This syntax is also supported in [Ender](https://github.com/ender-js) for client
side usage.

If you are using the global `$` object in Ender, you can also do the following:

```javascript
var output = $.dumpling(string)
```

###Testing
`npm test`

###License
MIT/X11

That's it. Hope your PHP days are over.