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
    const handleClick = (link) => {
        setSelectedItem(link);
    };
    const isBold = (link) => {
        return selectedItem === link ? 'bold' : 'normal';
    };
    return (
        <div className="sidebar">
            <span><a href='/main' className={isBold('link1')}
        onClick={() => handleClick('link1')}>
                <TwitterIcon className="sidebar-twitterIcon"/>
            </a>
            </span>

            <span style={{ fontWeight: isBold('link2') }}
        onClick={() => handleClick('link2')}><a href='/main' >
                <SidebarComponents text="Home" Icon={HomeIcon}/>
            </a>
            </span>

            <span style={{ fontWeight: isBold('link3') }}
        onClick={() => handleClick('link3')}><a href='/explore' >
                <SidebarComponents text="Explore" Icon={TagIcon}/>
            </a>
            </span>
            <a href='/main'>
                <SidebarComponents text="Notifications" Icon={NotificaIcon}/>
            </a>
            <a href='/main'>
                <SidebarComponents text="Messages" Icon={MailOutlineIcon}/>
            </a>
            <a href='/main'>
                <SidebarComponents text="Bookmarks" Icon={BookmarkIcon}/>
            </a>
            <a href='/main'>
                <SidebarComponents text="Twitter Blue" Icon={VerifiedIcon}/>
            </a>
            <a href='/main'>
                <SidebarComponents text="Profile" Icon={Face3Icon}/>
            </a>
            <Button variant="outlined" className="sidebar-button" fullWidth>Tweet</Button>
        </div>
    );
}


export default Sidebar