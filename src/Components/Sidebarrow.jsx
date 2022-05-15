import React from 'react'
import "./Siderow.css"
import { Avatar, IconButton } from '@mui/material';
const Sidebarrow = ({src,Icon,title}) => {
  return (
    <div className='siderow'>
        {src && <Avatar src={src}/>}
        {Icon && <Icon/>}
        <h4>{title}</h4>
    </div>
  )
}

export default Sidebarrow