//use this to pass the component for login
import './index.css';
import Axios from 'axios';

//this should have the buttons and stuff
import React from "react";
//this is going to be the frontend stuff
function Loginmain() {
    //create a state for the username and password
    const [usernameReg, setUsername] = React.useState('');
    const [passwordReg, setPassword] = React.useState('');
    
    //create a function that will send the username and password to the backend
    function login() {
        Axios.post('http://localhost:3002/login', {username: usernameReg, password: passwordReg}).then((response) => {
            console.log(response);
        });
    }

    return (
        <div>
            <h2 className="title-login-page">Sign in to Twitter</h2>
            <div className="forms">
                <div className='username'>
                    <input placeholder="username" className="user-input" type="text" onChange={(e) => {
                        setUsername(e.target.value);
                    }}></input>
                </div>
                <div className='password'>
                    <input placeholder="password" className="pass-input" type="text" onChange={(e) => {
                        setPassword(e.target.value);
                    }}></input>
                </div>
                <button className="login-button" >Next</button>
                <div className='new-user'>
                    <p className='new-user-text'>Don't have an account?</p>
                    <a href='/signup' className='signup=link'>Sign up</a>
                </div>
            </div>
        </div>
    )
}

export default Loginmain;