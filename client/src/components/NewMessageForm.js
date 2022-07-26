import React,{useState,useContext} from 'react';
import {ConnectionContext} from '../context/connectionContext.js';

function NewMessageForm() {
    const socket = useContext(ConnectionContext);
    const [newMessage,setNewMessage] = useState('')

    const sendMessage =(e)=>{
        e.preventDefault();
        socket.emit('newMessage',newMessage)
        setNewMessage('')
        
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