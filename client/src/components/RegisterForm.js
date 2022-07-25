import React, { useState } from 'react'

function RegisterForm() {
    const [username,setUsername] = useState('');
    const [room,setRoom] = useState('')
    
  return (
    <form >
        <input 
        type="text" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'
        required
        />
        <input
         type="text"
         value={room}
         onChange={(e)=>setRoom(e.target.value)}
         placeholder='Room Name'
         required
         />

         <button>Join</button>
    </form>
  )
}

export default RegisterForm