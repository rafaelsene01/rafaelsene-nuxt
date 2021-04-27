import { io } from 'socket.io-client'
const socketWeb = io('/socket/api/')
const socketAPI = io(process.env.API_URL)

export { socketWeb, socketAPI }
