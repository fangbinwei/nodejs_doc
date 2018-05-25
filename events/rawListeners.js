const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

myEmitter.once('log', () => {
  console.log('log once')
})

const listeners = myEmitter.rawListeners('log')
const logFnWrapper = listeners[0]

// logFnWrapper.listener()

logFnWrapper()
myEmitter.emit('log')
myEmitter.emit('log')

// myEmitter.on('log', () => {
//   console.log('log persistently')
// })

// const newListeners = myEmitter.rawListeners('log')

// newListeners[0]()
// myEmitter.emit('log')