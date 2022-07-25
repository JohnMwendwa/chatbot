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
