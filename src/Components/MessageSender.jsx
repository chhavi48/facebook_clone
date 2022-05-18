import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./Sender.css"
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from '../StateProvider';
const MessageSender = () => {
  const[{user},dispatch]=useStateValue()
    const[input,setinput]=useState("");
    const[imageUrl,setimageUrl]=useState("")
    const handlesubmit = e =>{

        e.preventDefault();
        setinput("");
        setimageUrl("");
    }
  return (
    <div className='msgsender'>
        <div className="msgsender-top">
  <Avatar src={user.photoURL}/>
      <form>
          <input 
          value={input}
          onChange={(e)=>setinput(e.target.value)}
          className="msgsender_input"
          placeholder={`what's on your mind ? ${user.displayName}`}
          />
 <input 
  value={imageUrl}
  onChange={(e)=>setimageUrl(e.target.value)}
 placeholder='image URL {optional}'/>
    <button onClick={handlesubmit} type="submit">
        Hiden Submit</button>
      </form>
        </div>
        <div className="msgsender-bottom">
       <div className="msgsender_option">
           <VideocamIcon style={{color:"red"}}/>
           <h3>Video Live</h3>
           </div>
           <div className="msgsender_option">
           <PhotoLibraryIcon style={{color:"green"}}/>
           <h3>PhotoVideo</h3>
           </div>
           <div className="msgsender_option">
           <InsertEmoticonIcon style={{color:"orange"}}/>
           <h3>Feeling/Activity</h3>
       </div>
        </div>
    </div>
  )
}

export default MessageSender