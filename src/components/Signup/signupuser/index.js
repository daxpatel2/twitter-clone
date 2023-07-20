import './index.css';
import { useState, React } from 'react';
import { auth, db } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';



function Signupforms() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [uid, setUID] = useState('');
    //for database use only
    const [image, setImage] = useState('');
    const usersCollectionRef = collection(db, "users");
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        //use this for auth; use the db for account info access purposes
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setMessage(`Account created for ${userCredential.user.email}`);
                setUID(userCredential.user.uid);
                console.log(uid);
                setEmail(userCredential.user.email);
                setTimeout(navigate("/main"),1000);
            })
            .catch((error) => {
                setMessage(error.message);
            });
    }

    async function handleDB() {
        // Add the user to the Firestore database
        await addDoc(usersCollectionRef, { uid:uid, image:image, email:email, password:password })
        console.log("HIT CONFIRM")
    };

    return (
        <div>
            <h2 className="title-signup-page">Join Twitter today</h2>
            <form onSubmit={handleSubmit} className='forms'>
                <div className='email'>
                    <input value={email} name="email" placeholder="email" className="user-input" type="text" onChange={(event) => {
                        setEmail(event.target.value);
                    }}></input>
                </div>
                <div className='password'>
                    <input value={password} name="password" placeholder="password" className="pass-input" type="text" onChange={(event) => {
                        setPassword(event.target.value);
                    }}></input>
                </div>
                <div className='img'>
                    <input name='image' type="text" className="img__input" placeholder="Enter URL of profile IMG" onChange={(event) => {
                        setImage(event.target.value)
                    }}></input>
                </div>
                <p className='message'>{message}</p>
                <button onClick={handleDB} className="register-button" type='submit'>Next</button>
            </form>
            <div className='returning-user'>
                <a href='/' className='returning-user-text'>Already have an account?</a>
            </div>
        </div>
    )
}

export default Signupforms;