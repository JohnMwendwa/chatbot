import React, { useState } from 'react'
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001')

function RegisterForm() {
    const [username,setUsername] = useState('');
    const [room,setRoom] = useState('')
    const [errorMessage,setErrorMessage] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault();
        socket.emit('join',{username,room},(error)=>{
            setErrorMessage(error)
        })
    }
  return (
<div>
   {errorMessage && <p>{errorMessage}</p>}
<form onSubmit={handleSubmit}>
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
</div>
  )
}

export default RegisterForm