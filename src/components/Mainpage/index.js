import React from "react";
//import all the mainpage compoenets and then pass it as a compnoet to render all at once
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widget from "./Widget";

function Mainpage() {
    return (
        <div className="app">
            <Sidebar />
            <Feed />
            <Widget />
        </div>
    )
}

export default Mainpage;