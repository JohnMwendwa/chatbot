const {v4:uuid} = require('uuid')

const generateMessage=(msg,username='Admin')=>{
    return {
        id:uuid(),
        username,
        msg,
        createdAt:new Date().getTime()
    }
}

module.exports = {
    generateMessage
}