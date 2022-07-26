const {v4:uuid} = require('uuid')

const generateMessage=(msg,username='Admin',socketId='admin')=>{
    return {
        id:uuid(),
        userId:socketId,
        username,
        msg,
        createdAt:new Date().getTime()
    }
}

module.exports = {
    generateMessage
}