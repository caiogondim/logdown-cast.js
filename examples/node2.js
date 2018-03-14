const logdown = require('logdown')
const logdownCast = require('../lib')
const debug = logdown('foo')
logdownCast.subscribe(debug)
