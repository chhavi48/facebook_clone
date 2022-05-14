import React from 'react'
import "./Sidebar.css"
import Sidebarrow from './Sidebarrow'
const Sidebar = () => {
  return (
    <div className='sidebar'>Sidebar
    <Sidebarrow title="pages"/>
    <Sidebarrow title="friends"/>
    </div>
  )
}

export default Sidebar