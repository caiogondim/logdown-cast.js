const logdown = require('logdown')
const logdownCast = require('../lib')
const debug = logdown('foo')
logdownCast.publish(debug)

setInterval(() => debug.log('hi', Date.now()), 1000)
