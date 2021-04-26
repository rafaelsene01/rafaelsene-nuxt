import io from 'socket.io-client'
const socketWeb = io(
  process.env.VERCEL_URL || 'http://localhost:3000/socket/api '
)
const socketAPI = io(process.env.API_URL)

export { socketWeb, socketAPI }
