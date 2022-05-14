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
const Header = () => {
  return (
  <div className='header'>
    <div className="header_left">
        <img src='https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png'/>
        <div className="header_input">
            <SearchIcon/>
            <input type="text"></input>
        </div>
    </div>
    <div className="header_middle">
        <div className="heder_option">
        <HomeIcon fontSize='large'/>
        </div>
        <div className="heder_option">
        <FlagIcon fontSize='large'/>
        </div>
        <div className="heder_option">
        <SubscriptionsIcon fontSize='large'/>
        </div>
        <div className="heder_option">
        <StorefrontIcon fontSize='large'/>
        </div>
        <div className="heder_option">
        <SupervisedUserCircleIcon fontSize='large'/>
        </div>
    </div>
    <div className="header_right">
        <div className="header_info">
            <Avatar src="https://pbs.twimg.com/profile_images/1451523037040283651/iDf18qJ2_400x400.jpg"/>
            <h4>Chhavi Srivastva</h4>
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