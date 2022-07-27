import React,{useState,useContext} from 'react';
import {ConnectionContext} from '../context/connectionContext.js';
import '../assets/css/NewMessageForm.css'
import { useNavigate } from 'react-router-dom';

function NewMessageForm() {
    const {socket,isConnected} = useContext(ConnectionContext);
    const [newMessage,setNewMessage] = useState('')
    const navigate = useNavigate()

    const sendMessage =(e)=>{
        e.preventDefault();
        if(isConnected){
          socket.emit('newMessage',newMessage)
          setNewMessage('')
        }else{
          alert("You've disconnected!")
          navigate('/') 
        }   
    }

  return (
    <form onSubmit={sendMessage} className='NewMessage'>
      <input 
        type="text" 
        value={newMessage}
        onChange={(e)=>setNewMessage(e.target.value)}
        placeholder='new message'
        required
        className='NewMessage__input'
      />
   <button className='NewMessage__btn'>Send</button>
  </form>
  )
}

export default NewMessageForm