import React from 'react'
import moment from 'moment'
import '../assets/css/Message.css'

function Message({message,id}) {
  return (
    <div className='Message'>

      {id === message.userId ? (
        <li className='Message__list'>
          <div className='Message__username outgoing'>You {moment(message.createdAt).format('h:mm a')} </div>
          <div className='Message__details'>{message.msg}</div>
        </li>)
      :(
        <li className='Message__list'>
          <div className='Message__username incoming'>{message.username} {moment(message.createdAt).format('h:mm a')} </div>
        <div className='Message__details'>{message.msg}</div>
        </li>
      )}

    </div>
  )
}

export default Message