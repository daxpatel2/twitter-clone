import './index.css'
import { useState } from 'react';
import SidebarComponents from "./sidebar_components";
import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
//import MessageIcon from '@material-ui/icons/Message'
import NotificaIcon from '@material-ui/icons/NotificationsNone';
import { Button } from '@material-ui/core';
import './User Images/userComponent';
import UserComponent from './User Images/userComponent';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TagIcon from '@mui/icons-material/Tag';
import VerifiedIcon from '@mui/icons-material/Verified';
import Face3Icon from '@mui/icons-material/Face3';
import UserBar from '../../UserBar/index.js'


function Sidebar() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [active,setActive] = useState(false);

    const handelClicked = () => {
        setActive(!active);
    }

    const textStyle = active ? { fontWeight: 'bold'} :{};

    return (
        <div className="sidebar">
            <a href='/main' stlye={ textStyle } onClick={handelClicked}>
                <TwitterIcon className="sidebar-twitterIcon"/>
            </a>
            <a href='/main' >
                <SidebarComponents text="Home" Icon={HomeIcon}/>
            </a>
            <a href='/explore'>
                <SidebarComponents text="Explore" Icon={TagIcon}/>
            </a>
            <a href='/notifications'>
                <SidebarComponents text="Notifications" Icon={NotificaIcon}/>
            </a>
            <a href='/messages'>
                <SidebarComponents text="Messages" Icon={MailOutlineIcon}/>
            </a>
            <a href='bookmarks'>
                <SidebarComponents text="Bookmarks" Icon={BookmarkIcon}/>
            </a>
            <a href='/blue'>
                <SidebarComponents text="Twitter Blue" Icon={VerifiedIcon}/>
            </a>
            <a href='/profile'>
                <SidebarComponents text="Profile" Icon={Face3Icon}/>
            </a>
            <Button variant="outlined" className="sidebar-button" fullWidth>Tweet</Button>
<<<<<<< HEAD
=======
            <UserComponent className='user-info'/>
>>>>>>> 98a69ba49ab75c9cbb3d4c16f65ccab0c0b2835c
        </div>
    );
}


export default Sidebar