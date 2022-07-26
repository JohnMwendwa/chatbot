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
<div className='RegisterForm'>
   {errorMessage && <p className='RegisterForm__error'>{errorMessage}</p>}
    <form onSubmit={handleSubmit} className='RegisterForm__form'>
        <input 
        type="text" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='username'
        required
        className='RegisterForm__username'
        />
        <input
         type="text"
         value={room}
         onChange={(e)=>setRoom(e.target.value)}
         placeholder='Room'
         required
         className='RegisterForm__room'
         />

         <button className='RegisterForm__btn'>Join</button>
    </form>
</div>
  )
}

export default RegisterForm