const http = require('http');
const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');
const {v4:uuid} = require('uuid')

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


server.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})