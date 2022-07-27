import { createContext, useState } from "react";
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001')

export const ConnectionContext = createContext()

export function ConnectionProvider(props){
    const [isConnected,setIsConnected] = useState(socket.connected)
    const [roomName,setRoomName] = useState('')
    return (
    <ConnectionContext.Provider value={{socket,isConnected,setIsConnected,roomName,setRoomName}}>
        {props.children}
    </ConnectionContext.Provider> 
    )
}