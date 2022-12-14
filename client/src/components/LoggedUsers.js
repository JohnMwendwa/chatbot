import React,{useContext, useEffect, useState} from 'react'
import {ConnectionContext} from '../context/connectionContext'
import '../assets/css/LoggedUsers.css'

function LoggedUsers() {
 const {socket,isConnected,roomName} = useContext(ConnectionContext)
 const [loggedInUsers,setLoggedInUsers] = useState([])

    useEffect(()=>{
        if(isConnected){
            socket.on('loggedUsers',({users})=>{
                setLoggedInUsers(users)
            })
        }

        return ()=> socket.off('loggedUsers')
    },[socket,isConnected])

  return (
   <div className='LoggedUsers'>
    <h2 className='LoggedUsers__title'>{roomName}</h2>
     <ul className='LoggedUsers__list'>
       {loggedInUsers?.map(user=><li key={user.id}>{user.username}</li>)}
    </ul>
   </div>
  )
}

export default LoggedUsers