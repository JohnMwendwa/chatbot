const http = require('http');
const express = require('express');
const cors = require('cors');
const socketio = require('socket.io')
const {generateMessage} = require('./utils/message')
const {addUser,removeUser,getUser,getUsersInRoom} = require('./utils/users')

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
    socket.on('join',(userDetails,callback)=>{
        const {error,user} = addUser({id:socket.id,...userDetails})

        if(error){
          return callback(error)
        }

        socket.join(user.room)

        socket.emit('message',generateMessage('welcome'))
        socket.broadcast.to(user.room).emit(`${user.username} has joined the chat!`)
        io.to(user.room).emit('loggedUsers',{
            room:user.room,
            users:getUsersInRoom(user.room)
        })

        callback()
    })

    socket.on('newMessage',(data)=>{
        const user = getUser(socket.id)
        io.to(user.room).emit('message',generateMessage(data,user.username))
    })   


    socket.on('disconnect',()=>{
       const user = removeUser(socket.id);
       
       if(user){
        io.to(user.room).emit('message',generateMessage(`${user.username} has left!`))
        onabort.to(user.room).emit('loggedUsers',{
            room:user.room,
            users:getUsersInRoom(user.room)
        })
       }
    })
})

server.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})