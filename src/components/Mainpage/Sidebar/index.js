import './index.css'
import SidebarComponents from "./sidebar_components";
import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import MessageIcon from '@material-ui/icons/Message'
import NotificaIcon from '@material-ui/icons/NotificationsNone'
import { Button } from '@material-ui/core' //since this is material UI core it is a clickable button rather than a svg image which would be @material-ui/icons
import './User Images/userComponent'
import UserComponent from './User Images/userComponent';


function Sidebar() {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar-twitterIcon"/>
            <SidebarComponents text="Home" Icon={HomeIcon}/>
            <SidebarComponents text="Explore" Icon={ExploreIcon}/>
            <SidebarComponents text="Messages" Icon={MessageIcon}/>
            <SidebarComponents text="Notifications" Icon={NotificaIcon}/>
            <Button variant="outlined" className="sidebar-button" fullWidth>Tweet</Button>
            <UserComponent />
        </div>
    );
}


export default Sidebar