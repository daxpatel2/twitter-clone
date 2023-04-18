import './index.css';
import { useState, React } from 'react';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Signupforms() {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth,email, password)
            .then((userCredential) => {
                setMessage(`Account created for ${userCredential.user.email}`);
                //if account created successfully
                navigate('/main');
            })
            .catch((error) => {
                setMessage(error.message);
            }
        );
    };

    return (
        <div>
            <h2 className="title-signup-page">Join Twitter today</h2>
            <form onSubmit={handleSubmit} className='forms'>
                <div className='email'>
                    <input value={email} name="email" placeholder="email" className="user-input" type="text" onChange={(event) => {
                        setemail(event.target.value);
                    }}></input>
                </div>
                <div className='password'>
                    <input value={password} name="password" placeholder="password" className="pass-input" type="text" onChange={(event) => {
                        setPassword(event.target.value);
                    }}></input>
                </div>
                <p className='message'>{message}</p>
               <button className="register-button" type='submit'>Next</button>
            </form>
            <div className='returning-user'>
                <a href='/' className='returning-user-text'>Already have an account?</a>
            </div>
        </div>
    )
}

export default Signupforms;