import { React } from 'react'
import './index.css'
import profilePic from '../../assets/profile.png'
import { useState } from 'react'

function UserBar({name,userTag,profileImg}) {

    return (
        <div className='main'>
            <div className='nester'>
                <img className='profile__img' src={profileImg}/>
                <div className='info'>
                    <h1 className='username'>{name}</h1>
                    <h1 className='atUser'>@{userTag}</h1>
                </div>
                <div className='button'>
                    ...
                </div>
            </div>
        </div>
    )
}

export default UserBar;