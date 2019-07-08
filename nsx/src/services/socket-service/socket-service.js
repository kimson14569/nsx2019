import socketIOClient from 'socket.io-client'

export const serverEndPoint = 'http://e554dd4d.ngrok.io' 
export const socket = socketIOClient(serverEndPoint)
export const userName = 'Kim Son'