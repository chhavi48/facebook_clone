import React from 'react'
import "./Siderow.css"
import { Avatar, IconButton } from '@mui/material';
const Sidebarrow = ({src,Icon,title}) => {
  return (
    <div className='siderow'>
        {src && <Avatar src={src}/>}
        {Icon && <Icon/>}
        <p>{title}</p>
    </div>
  )
}

export default Sidebarrow