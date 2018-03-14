const localcast = require('localcast')

function publish (logdownInstance) {
  const cast = localcast(logdownInstance.opts.prefix)

  const originalLog = logdownInstance.log.bind(logdownInstance)
  logdownInstance.log = (...args) => {
    cast.emit('msg', {
      prefix: logdownInstance.opts.prefix,
      args: args
    })
    originalLog(...args)
  }
}

function subscribe (logdownInstance) {
  const cast = localcast(logdownInstance.opts.prefix)

  cast.on('msg', data => {
    logdownInstance.log(...data.args)
  })
}

module.exports = {
  publish,
  subscribe
}
