const express = require('express')
const app = express()
const port = 5000
const http = require('http')
const socketIO = require('socket.io')
const server = http.createServer(app)
const io = socketIO(server)
const moment = require('moment')
const pg = require('pg')
const cors = require('cors')

const env = require('dotenv').config()

const config = {
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
}

const pool = new pg.Pool(config)

io.on('connection', (socket) => {
    console.log('Connectd')
    socket.on('send-message', (value) => {
        console.log(value)
        let msg = value.message
        let roomName = generrateRoom(value.room)
        value.message = convert2HTML(msg)
        value.avatar = createAvatar(value.userName)
        value.create_at = moment().format('MMMM Do YYYY, h:mm:ss a')
        io.in(roomName).emit('receive-message', value)
        save2DB(value, value.room)
    })
    
    //server nhận tín hiệu
    socket.on('join', (value) => {
        let roomName = generrateRoom(value.room)
        socket.join(roomName)
        io.in(roomName).emit('joined', value)
        console.log(`${value.userName} joined ${value.room}`)
        getHistories(roomName, value.room)
    })
    
    socket.on('leave', (value) => {
        io.in(room).emit('leaved', value)
        socket.leave(room)
        console.log(`${value.userName} leaved`)
    })

    socket.on('typing', (value) => {
        console.log(`${value.userName} typing.....`)
        // console.log(value)
        // console.log(value.text == '')
        if(value.text == '') {
            io.in(room).emit('member_stop_typing', {
                userName: value.userName
            })    
        } else {
            io.in(room).emit('member_typing', {
                userName: value.userName
            })    
        }
    })

    socket.on('disconnect', () => {
        console.log('Client disconnected.')
    })
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/room-list', cors(), (req, res) => {
    pool.connect(function (err, client, done) {
        client.query(`select * from chat`, function(err, result) {
            done()
            if(!err) {
                res.send({
                    status: 200,
                    data: result.rows
                })
            }
        })
    })
})

server.listen(port, () => {
    console.log(`Server started with port ${port}`)
})

function createAvatar(userStr) {
    return userStr.substr(0, 2)
}

function convert2HTML(message) {
    return message
        .replace(/\:\)/g, '<i class="em em-slightly_smiling_face"></i>')
        .replace(/\:\(/g, '<i class="em em-disappointed"></i>')
        .replace(/\:d/g, '<i class="em em-smiley"></i>')
        .replace(/\:\+1/g, '<i class="em em-ok_hand"></i>')
}

function save2DB(value, room_id) {
    pool.connect(function(err, client, done) {
        let sql = `insert into chat (sent_by, created_at, message, room_id) values (${value.userName}, ${value.create_at}, ${value.message}, ${room_id})`
        client.query(sql, function(err, result) {
            done()
        })
    })
}

function getHistories(roomName, room_id, userName) {
    pool.connect(function(err, client, done) {
        client.query(`select * from chat where room_id = ${room_id}` , function(err, result) {
            done()
            if(!err) {
                io.in(room).emit(`histories-${userName}`, {
                    room: room_id,
                    userName: userName,
                    rows: result.rows
                })
                
            }
        })
    })
}

function generrateRoom() {
    return `room ${id}`
} 