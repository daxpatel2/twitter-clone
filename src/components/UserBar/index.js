import { React} from 'react'
import './index.css'
import { auth, db } from '../../firebase'
import { UilSignout } from '@iconscout/react-unicons'
import firebase from 'firebase/app';
import { getAuth, signOut } from "firebase/auth";

function UserBar({name,userTag,profileImg}) {

    const handleLogout = () => {
        if (window.confirm('Do you want to log out?')) {
            const auth = getAuth();
            signOut(auth).then(() => {
                console.log("logged out")
            // Sign-out successful.
            }).catch((error) => {
            // An error happened.
                console.log(error)
            });
          }
          alert('Logged out successfully!');
    };

    return (
        <div className='main'>
            <div className='nester'>
                <img className='profile__img' src={profileImg}/>
                <div className='info'>
                    <h1 className='username'>{name}</h1>
                    <h1 className='atUser'>@{userTag}</h1>
                </div>
                <UilSignout onClick={handleLogout} className='uli'/>
            </div>
        </div>
    )
}

export default UserBar;