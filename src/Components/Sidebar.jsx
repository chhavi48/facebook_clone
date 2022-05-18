import React from 'react'
import "./Sidebar.css"
import Sidebarrow from './Sidebarrow'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from '../StateProvider';
const Sidebar = () => {
  const[{user},dispatch]=useStateValue()
  return (
    <div className='sidebar'>Sidebar
    <Sidebarrow src={user.photoURL}
     title={user.displayName}/>
    <Sidebarrow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
    <Sidebarrow Icon={EmojiFlagsIcon} title="Pages"/>
    <Sidebarrow Icon={PeopleOutlineIcon} title="Friends"/>
    <Sidebarrow Icon={ChatIcon} title="Messenger"/>
    <Sidebarrow Icon={StorefrontIcon} title="Marketplace"/>
    <Sidebarrow Icon={OndemandVideoIcon} title="Videos"/>
    <Sidebarrow Icon={ExpandMoreIcon} title="More"/>
    </div>
  )
}

export default Sidebar