import React,{useContext, useEffect, useState} from 'react'
import {ConnectionContext} from '../context/connectionContext'

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
   <div>
    <h2>{roomName}</h2>
     <ul>
       {loggedInUsers?.map(user=><li key={user.id}>{user.username}</li>)}
    </ul>
   </div>
  )
}

export default LoggedUsers