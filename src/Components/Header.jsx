import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AddIcon from '@mui/icons-material/Add';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MessageIcon from '@mui/icons-material/Message';
import { Avatar, IconButton } from '@mui/material';
import { useStateValue } from '../StateProvider';
const Header = () => {
    const[{user},dispatch]=useStateValue();
  return (
    
  <div className='header'>
    <div className="header_left">
        <img src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'/>
        <div className="header_input">
            <SearchIcon/>
            <input placeholder="Search Facebook"type="text"></input>
        </div>
    </div>
    <div className="header_center">
        <div className="heder_option
        header__option__active">
        <HomeIcon fontSize='large'/>
        </div>
        <div className="heder_option
        ">
        <FlagIcon fontSize='large'/>
        </div>
        <div className="heder_option
        ">
        <SubscriptionsIcon fontSize='large'/>
        </div>
        <div className="heder_option
        ">
        <StorefrontIcon fontSize='large'/>
        </div>
        <div className="heder_option
        ">
        <SupervisedUserCircleIcon fontSize='large'/>
        </div>
    </div>
    <div className="header_right">
        <div className="header_info">
            <Avatar src={user.photoURL}/>
            <h4>"chhavi"</h4>
           <IconButton>
               <MessageIcon/>
               <AddIcon/>
              <CircleNotificationsIcon/>
              <ExpandMoreIcon/>

           </IconButton>
        </div>
    </div>
  </div>
  )
}

export default Header