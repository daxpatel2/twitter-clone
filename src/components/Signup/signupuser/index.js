//forms and stuff here
//use this to pass the component for login
import './index.css';
import Axios from 'axios';
import React from "react";
//this is going to be the frontend stuff
function Signupforms() {
    //create a state for the username and password
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    //will run through the onClick command in HTML button
    function register() {
        Axios.post('http://localhost:3002/login', {username: setUsername, password: setPassword}).then((response) => {
            console.log(response);
        });
    }

    return (
        <div>
            <h2 className="title-signup-page">Join Twitter today</h2>
            <div className="forms">
                <div className='username'>
                    <input name="username" placeholder="username" className="user-input" type="text" onChange={(e) => {
                        setUsername(e.target.value);
                    }}></input>
                </div>
                <div className='password'>
                    <input name="password" placeholder="password" className="pass-input" type="text" onChange={(e) => {
                        setPassword(e.target.value);
                    }}></input>
                </div>
                <button className="register-button" onclick={register} >Next</button>
                <div className='returning-user'>
                    <p className='returning-user-text'>Already have and account?</p>
                    <a href='/' className='signup=link'>Sign in</a>
                </div>
            </div>
        </div>
    )
}

export default Signupforms;