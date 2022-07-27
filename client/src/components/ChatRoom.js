import {useEffect,useState,useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import {ConnectionContext} from '../context/connectionContext.js';
import Message from './Message.js';
import NewMessageForm from './NewMessageForm.js';
import '../assets/css/ChatRoom.css'

function ChatRoom() {
    const {socket,isConnected,setIsConnected} = useContext(ConnectionContext);
    const [message,setMessage] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
      if(isConnected){
        socket.on('message',(data)=>{
          setMessage([...message,data])
        })
      }

      socket.on('disconnect',()=>{
        setIsConnected(false)
        alert("You've disconnected!")
        navigate('/')
      })

      return ()=> {
        socket.off('message')
        socket.off('disconnect')
      }
    },[socket,message,isConnected,navigate,setIsConnected])
    
  return (
    <div className='Chatroom'>
         <h2>Messages</h2>
         
        <ul className='Chatroom__lists'>
          {message.map(msg=><Message message={msg} id={socket.id} key={msg.id}/>)}
        </ul>

         <NewMessageForm />
    </div>
  )
}

export default ChatRoom