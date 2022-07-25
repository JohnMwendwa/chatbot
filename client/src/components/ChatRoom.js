import {useEffect,useState,useContext} from 'react';
import {ConnectionContext} from '../context/connectionContext.js';
import Message from './Message.js';
import NewMessageForm from './NewMessageForm.js';

function ChatRoom() {
    const socket = useContext(ConnectionContext);
    const [message,setMessage] = useState([]);

    useEffect(()=>{
      socket.on('message',(data)=>{
        setMessage([...message,data])
      })

      return ()=> socket.off('message')
    },[socket,message])
 
  return (
    <div>
         <h2>Messages</h2>
         
        <ul>
          {message.map(msg=><Message message={msg} key={msg.id}/>)}
        </ul>

         <NewMessageForm />
    </div>
  )
}

export default ChatRoom