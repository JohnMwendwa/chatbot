import React from 'react'
import moment from 'moment'

function Message({message}) {
  return (
    <div>
        <li>
            <div>{message.username} {moment(message.createdAt).format('h:mm a')}</div> 
            <div>{message.msg}</div>
        </li>
    </div>
  )
}

export default Message