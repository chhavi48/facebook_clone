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
const Sidebar = () => {
  return (
    <div className='sidebar'>Sidebar
    <Sidebarrow src='https://pbs.twimg.com/profile_images/1451523037040283651/iDf18qJ2_400x400.jpg' title="Chhavi Srivastva"/>
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