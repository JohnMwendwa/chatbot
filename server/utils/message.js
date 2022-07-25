const generateMessage=(username='Admin',msg)=>{
    return {
        username,
        msg,
        createdAt:new Date().getTime()
    }
}

module.exports = {
    generateMessage
}