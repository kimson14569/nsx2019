const express = require('express')
const app = express()

const port = 5000
const http = require('http')
const socketIO = require('socket.io')
const server = http.createServer(app)
const io = socketIO(server)


io.on('connection', (socket) => {
    console.log('Connectd')
    socket.on('s-message', (value) => {
        console.log(value)
        io.in(room).emit('receive-message', value)
    })

    socket.on('join', (value) => {
        socket.join(room)
        io.in(room).emit('joined', value)
        console.log(`${value.userName} joined`)
    })

    socket.on('leave', (value) => {
        socket.leave(room)
        io.in(room).emit('leaved', value)
        console.log(`${value.userName} leaved`)
    })

    socket.on('disconnect', () => {
        console.log('Client Disconnected.')
    })

    socket.on('typing', (value) => {
        // console.log(`${value.userName} typing...`)
        io.in(room).emit('member-typing', {
            userName: value.userName
        })
    })
})

app.get('/', (req, res) => {
    res.send('Hello World')
})



server.listen(port, () => {
    console.log(`Server started with port ${port}`)
})
