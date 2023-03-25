//use this to pass the component for login
import './index.css';
import verifyLogin from './loginAction';
//this should have the buttons and stuff

import React from "react";
//this is going to be the frontend stuff
function Loginmain() {
    return (
        <div>
            <h2 className="title-login-page">Sign in to Twitter</h2>
            <div className="forms">
                <div className='username'>
                    <input placeholder="username" className="user-input"></input>
                </div>
                <div className='password'>
                    <input placeholder="password" className="pass-input"></input>
                </div>
                <button className="login-button" onclick={verifyLogin}>Next</button>
                <div className='new-user'>
                    <p className='new-user-text'>Don't have an account?</p>
                    <a href='/signup' className='signup=link'>Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default Loginmain;