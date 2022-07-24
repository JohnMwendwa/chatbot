const http = require('http');
const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 3000;
app.use(cors)


server.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})