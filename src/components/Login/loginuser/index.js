//use this to pass the component for login

//this should have the buttons and stuff

import React from "react";
//this is going to be the frontend stuff
function Loginmain() {
    return (
        <div>
            <h2>Login Page</h2>
            <input placeholder="username" className="username"></input>
            <input placeholder="password" className="password"></input>
        </div>
    )
}

export default Loginmain;