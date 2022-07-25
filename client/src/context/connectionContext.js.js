import { createContext } from "react";
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001')

export const ConnectionContext = createContext()

export function ConnectionProvider(props){
    return (
    <ConnectionContext.Provider value={socket}>
        {props.children}
    </ConnectionContext.Provider> 
    )
}