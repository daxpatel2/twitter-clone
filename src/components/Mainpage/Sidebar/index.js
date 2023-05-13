import './index.css'
import SidebarComponents from "./sidebar_components";
import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
//import MessageIcon from '@material-ui/icons/Message'
import NotificaIcon from '@material-ui/icons/NotificationsNone'
import { Button } from '@material-ui/core' //since this is material UI core it is a clickable button rather than a svg image which would be @material-ui/icons
import './User Images/userComponent'
import UserComponent from './User Images/userComponent';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TagIcon from '@mui/icons-material/Tag';
import VerifiedIcon from '@mui/icons-material/Verified';
import Face3Icon from '@mui/icons-material/Face3';




function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar-twitterIcon"/>
            <SidebarComponents text="Home" Icon={HomeIcon}/>
            <SidebarComponents text="Explore" Icon={TagIcon}/>
            <SidebarComponents text="Notifications" Icon={NotificaIcon}/>
            <SidebarComponents text="Messages" Icon={MailOutlineIcon}/>
            <SidebarComponents text="Bookmarks" Icon={BookmarkIcon}/>
            <SidebarComponents text="Twitter Blue" Icon={VerifiedIcon}/>
            <SidebarComponents text="Profile" Icon={Face3Icon}/>
            <Button variant="outlined" className="sidebar-button" fullWidth>Tweet</Button>
            <UserComponent />
        </div>
    );
}


export default Sidebar