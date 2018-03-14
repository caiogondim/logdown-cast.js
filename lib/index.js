const localcast = require('localcast')

const methodNames = ['log', 'info', 'warn', 'error', 'debug']

function publish (logdownInstance) {
  const cast = localcast(logdownInstance.opts.prefix)

  methodNames.forEach(methodName => {
    const originalMethod = logdownInstance[methodName].bind(logdownInstance)
    logdownInstance[methodName] = (...args) => {
      cast.emit(methodName, {
        prefix: logdownInstance.opts.prefix,
        args: args
      })
      originalMethod(...args)
    }
  })
}

function subscribe (logdownInstance) {
  const cast = localcast(logdownInstance.opts.prefix)

  methodNames.forEach(methodName => {
    cast.on(methodName, data => {
      logdownInstance[methodName](...data.args)
    })
  })
}

module.exports = {
  publish,
  subscribe
}
