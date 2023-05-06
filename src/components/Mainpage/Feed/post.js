import React from 'react';
import './post.css'; //this will handel styiling within the post
import img from './profile-icon.png';

//this is logic and style for a single post
//need to give each post a flex property so they are all on the same line
//like the entire page but only for the posts

function Post( { displayName, text}) {
    return (
        <div className='post'>
            <img className='profile-pic' src={img} alt="avatar" />
            <h2 className='display-name'>{displayName}</h2>
            <h3 className='text'>{text}</h3>
        </div>
    )
};

export default Post;