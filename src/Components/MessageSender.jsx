import { Avatar } from '@mui/material'
import React from 'react'
import "./Sender.css"
const MessageSender = () => {
    const handlesubmit = e =>{
        e.preventDefault();
    }
  return (
    <div className='msgsender'>
        <div className="msgsender-top">
  <Avatar/>
      <form>
          <input className="msgsender_input"
          placeholder={"what's on your mind"}
          />
 <input placeholder='image URL {optional}'/>
    <button onClick={handlesubmit} type="submit">
        Hiden Submit</button>
      </form>
        </div>
        <div className="msgsender-bottom">

        </div>
    </div>
  )
}

export default MessageSender