import './index.css';
import Axios from 'axios';
import { useState, React } from 'react';

function Signupforms() {
    //once it works change all the usenames to emails
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        setUsername('');
        setPassword('');
        setMessage(`hello ${username}!`);
    };

    return (
        <div>
            <h2 className="title-signup-page">Join Twitter today</h2>
            <form onSubmit={handleSubmit}>
                <div className='username'>
                    <input value={username} name="username" placeholder="username" className="user-input" type="text" onChange={(event) => {
                        setUsername(event.target.value);
                    }}></input>
                </div>
                <div className='password'>
                    <input value={password} name="password" placeholder="password" className="pass-input" type="text" onChange={(event) => {
                        setPassword(event.target.value);
                    }}></input>
                </div>
               <button className="register-button" type='submit'>Next</button>
               <h2>{message}</h2>
            </form>
            <div className='returning-user'>
                <p className='returning-user-text'>Already have and account?</p>
                <a href='/' className='signup=link'>Sign in</a>
            </div>
        </div>
    )
}

export default Signupforms;