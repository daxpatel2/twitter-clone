import React from "react";
//import all the mainpage compoenets and then pass it as a compnoet to render all at once
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
//import Explore from './Explore';

function Mainpage() {
    return (
        <div className="app">
            <Sidebar />
            <Feed />
            {/*   <Explore />only show explore if the clicked button {i.e the user clicks on explore} */}
            <Widget />
        </div>
    )
}

export default Mainpage;