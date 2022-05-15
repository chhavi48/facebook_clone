import { Avatar } from '@mui/material'
import React from 'react'
import "./Story.css"
const Story = ({image,profilepic,title}) => {
  return (
    <div style={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat"}}
    className='Story'>

        <Avatar className="story_avtar" src={profilepic}/>
        <h4>{title}</h4>
    </div>
  )
}

export default Story