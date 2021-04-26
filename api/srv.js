const app = require('express')()
const socket = require('socket.io')
let server = null
let io = null

app.all('/', (req, res) => {
  if (!server) {
    server = res.connection.server
    io = socket(server)

    io.on('connection', function (socket) {
      console.log('Made socket connection')

      socket.on('message', (msg) => {
        socket.emit('message', msg)
      })

      socket.on('disconnect', () => console.log('disconnected'))
    })
  }

  res.json({ msg: 'server is set' })
})

module.exports = app
