import {useEffect,useState} from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001')

function ChatRoom() {
    const [message,setMessage] = useState([]);
    const [newMessage,setNewMessage] = useState('')

    useEffect(()=>{
      socket.on('message',(data)=>{
        setMessage([...message,data])
      })
    },[message])
 
    const sendMessage =(e)=>{
        e.preventDefault();
        socket.emit('newMessage',newMessage)
        setNewMessage('')
    }

  return (
    <div>
         <h2>Messages</h2>
        <ul>
          {message.map(msg=><li key={msg.id}>{msg.msg}</li>)}
        </ul>
        <form onSubmit={sendMessage}>
          <input 
           type="text" 
           value={newMessage}
           onChange={(e)=>setNewMessage(e.target.value)}
          />
         <button>Send</button>
        </form>
    </div>
  )
}

export default ChatRoom