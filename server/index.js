const http = require('http');
const express = require('express');
const cors = require('cors');
const socketio = require('socket.io')
const {generateMessage} = require('./utils/message')

const app = express();
const server = http.createServer(app);
const io = socketio(server,{
    cors:{
        origin:'http://localhost:3000',
        methods:['GET','POST']
    }
});
const PORT = process.env.PORT || 3001;
app.use(cors)

io.on('connection',(socket)=>{
    socket.emit('message',generateMessage('welcome'))
})

server.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})