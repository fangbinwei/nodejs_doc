const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

myEmitter.once('newListener', (event, listener) => {
  // listener.call(null, 'aaaa')
  if (event === 'event') {
    myEmitter.on('event', () => {
      console.log('C')
    })
  }
})

myEmitter.on('event', function() {
  console.log('A', this)
})
var a = myEmitter.addListener('event', function() {
  console.log('B', this)
})

myEmitter.emit('event') // B A
console.log(myEmitter.getMaxListeners())
console.log(myEmitter.eventNames())
myEmitter.listeners('event')[1]() //监听器数组的副本