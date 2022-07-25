import React from 'react'

function Message({message}) {
  return (
    <div>
        <li>
            <div>{message.username} {message.createdAt}</div> 
            <div>{message.msg}</div>
        </li>
    </div>
  )
}

export default Message