import {useEffect,useState,useContext} from 'react';
import {ConnectionContext} from '../context/connectionContext.js';
import Message from './Message.js';

function ChatRoom() {
    const socket = useContext(ConnectionContext);
    const [message,setMessage] = useState([]);
    const [newMessage,setNewMessage] = useState('')

    useEffect(()=>{
      socket.on('message',(data)=>{
        setMessage([...message,data])
      })

      return ()=> socket.off('message')
    },[socket,message])
 
    const sendMessage =(e)=>{
        e.preventDefault();
        socket.emit('newMessage',newMessage)
        setNewMessage('')
    }

  return (
    <div>
         <h2>Messages</h2>
        <ul>
          {message.map(msg=><Message message={msg} key={msg.id}/>)}
        </ul>
        <form onSubmit={sendMessage}>
          <input 
           type="text" 
           value={newMessage}
           onChange={(e)=>setNewMessage(e.target.value)}
           placeholder='new message'
           required
          />
         <button>Send</button>
        </form>
    </div>
  )
}

export default ChatRoom