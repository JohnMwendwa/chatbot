import React, { useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {ConnectionContext} from '../context/connectionContext.js';

function RegisterForm() {
    const socket = useContext(ConnectionContext);
    const [username,setUsername] = useState('');
    const [room,setRoom] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();
        socket.emit('join',{username,room},(error)=>{
            setErrorMessage(error)
        })
        navigate('/chat')
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