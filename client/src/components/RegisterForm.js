import React, { useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {ConnectionContext} from '../context/connectionContext.js';
import '../assets/css/RegisterForm.css'

function RegisterForm() {
    const {socket,setIsConnected} = useContext(ConnectionContext);
    const [username,setUsername] = useState('');
    const [room,setRoom] = useState('');
    const [errorMessage,setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
       socket.emit('join',{username,room},(error)=>{

            if(error){
              return setErrorMessage(error)
            }
            setIsConnected(true)
            navigate('/chat')
     })              
    }
    
  return (
<div className='RegisterForm'>
  <h1 className='RegisterForm__title'>Chatbot</h1>

   {errorMessage && <p className='RegisterForm__error'>{errorMessage}</p>}
   
    <form onSubmit={handleSubmit} className='RegisterForm__form'>

      <label htmlFor="username">username</label>
        <input 
            id='username'
            type="text" 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='john'
            required
            className='RegisterForm__username'
        />

        <label htmlFor="room">Room name</label>
        <input
            id='room'
            type="text"
            value={room}
            onChange={(e)=>setRoom(e.target.value)}
            placeholder='javascript'
            required
            className='RegisterForm__room'
         />

         <button className='RegisterForm__btn'>Join</button>
    </form>
</div>
  )
}

export default RegisterForm