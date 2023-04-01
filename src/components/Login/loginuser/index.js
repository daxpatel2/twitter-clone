import { auth } from '../../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import './index.css';
import React, { useState } from "react";

function Loginmain() {
    //create a state for the emailsetemail and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth,email, password)
            .then((userCredential) => {
                setMessage(`Attempting login for ${userCredential.user.email}`);
            })
            .catch((error) => {
                setMessage(error.message);
            }
        );
    };

    return (
        <div>
            <h2 className="title-login-page">Sign in to Twitter</h2>
            <form onSubmit={handleSubmit} oclassName="forms">
                <div className='email'>
                    <input value={email} placeholder="email-input" className="user-input" type="text" onChange={(event) => {
                        setEmail(event.target.value);
                    }}></input>
                </div>
                <div className='password'>
                    <input value={password} placeholder="password" className="pass-input" type="text" onChange={(event) => {
                        setPassword(event.target.value);
                    }}></input>
                </div>
                <p className="message">{message}</p>
                <button className="login-button">Next</button>
                <div className='new-user'>
                    <p className='new-user-text'>Don't have an account?</p>
                    <a href='/signup' className='signup=link'>Sign up</a>
                </div>
            </form>
        </div>
    )
}

export default Loginmain;