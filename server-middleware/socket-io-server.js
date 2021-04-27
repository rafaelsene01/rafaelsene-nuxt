// This file is executed once when the server is started

// Setup a socket.io server on port 3001 that has CORS disabled (do not set this to port 3000 as port 3000 is where the nuxt dev server serves your nuxt application)
const io = require('socket.io')(3001, {
  cors: {
    // No CORS at all
    // origin: '*',
    origin: process.env.VERCEL_URL
      ? process.env.VERCEL_URL
      : 'http://localhost:3000',
  },
})

io.on('connection', function (socket) {
  const { doc } = socket.handshake.query
  io.emit('clientsCount', io.engine.clientsCount)

  socket.join(doc)

  socket.on('text', (msg) => {
    io.to(doc).emit('text', { id: socket.id, msg })
  })

  socket.on('disconnect', () => {
    socket.leave(doc)
    io.emit('clientsCount', io.engine.clientsCount)
  })
})

// Since we are a serverMiddleware, we have to return a handler, even if this it does nothing
export default function (req, res, next) {
  next()
}
