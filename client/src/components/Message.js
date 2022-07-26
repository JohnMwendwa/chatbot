import React from 'react'
import moment from 'moment'
import '../assets/css/Message.css'

function Message({message,id}) {
  return (
    <div className='Message'>

      {id === message.userId ? (
        <li className='Message__list outgoing'>
          <div className='Message__username'>
            <span className='username'>You</span>
            <span className='time'>
              {moment(message.createdAt).format('h:mm A')} </span>
           </div>
          <div className='Message__details'>{message.msg}</div>
        </li>)
      :(
        <li className='Message__list incoming'>
          <div className='Message__username'>
            <span className='username'>{message.username} </span>
          <span className='time'>
              {moment(message.createdAt).format('h:mm A')} </span></div>
        <div className='Message__details'>{message.msg}</div>
        </li>
      )}

    </div>
  )
}

export default Message