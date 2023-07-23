import React from "react";
import Loginmain from "./loginuser";
import './index.css';
import TwitterIcon from '@material-ui/icons/Twitter';
//this is going to be the frontend stuff
function Login() {
    return (
        <div className="login-main">
            <TwitterIcon className="twitter-logo"/>
            <Loginmain />
        </div>
    )
}

export default Login;