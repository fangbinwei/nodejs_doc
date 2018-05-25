const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()
// myEmitter.on('test', (arg1, arg2) => {
//   console.log(arg1, arg2, this === module.exports)
// })
// .on/once()
myEmitter.on('newListener', (event, listener) => {
  console.log('new listener', event, listener)
})
myEmitter.on('test', function (arg1, arg2) {
  // this === myEmitter
   console.log(arg1, arg2, this)
})

myEmitter.on('error', (err) => {
  console.error('有错误', err.message)
})
myEmitter.emit('test', 'a', 'b')
myEmitter.emit('error', new Error('whoops!'))
