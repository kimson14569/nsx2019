import socketIOClient from 'socket.io-client'

export const serverEndPoint = 'https://1ea2e6d8.ngrok.io' 
export const socket = socketIOClient(serverEndPoint)
export const userName = 'Kim Son'