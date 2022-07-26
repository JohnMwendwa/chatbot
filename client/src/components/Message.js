import React from 'react'
import moment from 'moment'

function Message({message,id}) {
  return (
    <div>
        <li>
            <div>{id === message.userId ? 'You' : message.username} {moment(message.createdAt).format('h:mm a')}</div> 
            <div>{message.msg}</div>
        </li>
    </div>
  )
}

export default Message