const users = [];

const addUser =({id,username,room})=>{
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

  //  Validate data
    if(!username && !room){
        return {
            error:'Username and room are required'
        }
    }

    // check for existing user
    const existingUser = users.find((user)=>user.room === room && user.username === username);

    //   Validate username
    if(existingUser){
        return {
            error:'Username already in use!'
        }
    }
   
    // Store user
    const user = {id,username,room}
    users.push(user)
    return {user}
}

const removeUser =(id)=>{
   const idx = users.findIndex(user=>user.id === id)
   if(idx !== -1){
    return users.splice(idx,1)[0]
   }
}

// Get a single user
const getUser =(id)=>users.find((user)=>user.id === id)

// Get all users in a room
const getUsersInRoom =(room)=> users.filter(user=>user.room === room)