const logdown = require('logdown')
const logdownCast = require('../lib')
const debug = logdown('foo')
logdownCast.publish(debug)

setInterval(() => debug.log('hi', Date.now()), 4000)
setInterval(() => debug.info('hi', Date.now()), 4000)
setInterval(() => debug.warn('hi', Date.now()), 4000)
