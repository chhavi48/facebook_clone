import { Avatar } from '@mui/material'
import React from 'react'
import "./Sender.css"
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const MessageSender = () => {
    const handlesubmit = e =>{
        e.preventDefault();
    }
  return (
    <div className='msgsender'>
        <div className="msgsender-top">
  <Avatar src="https://pbs.twimg.com/profile_images/1451523037040283651/iDf18qJ2_400x400.jpg"/>
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