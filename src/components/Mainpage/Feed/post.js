import React from 'react';
import './post.css'; //this will handel styiling within the post
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

//this is logic and style for a single post
//need to give each post a flex property so they are all on the same line
//like the entire page but only for the posts
//make sure to add image functionality to the database

function Post( { displayName, text, profilePic }) {
    return (
        <div className='post'>
            <div className='post-avatar'>
                <Avatar src={profilePic}/>
            </div>
            <div className='post-body'>
                <div className='post-header'>
                    <div className='post-header-text'>
                        <h3>
                            {displayName}
                            <span>
                                <VerifiedUserIcon className="post-badge" />
                            </span>
                        </h3>
                    </div>
                    <div className='header-discription'>
                        <p> {text}</p>
                    </div>
                </div>
                <div className='image-container'>
                    <img src='https://media.istockphoto.com/id/136700137/photo/side-view-of-a-sitting-gorilla.jpg?s=612x612&w=0&k=20&c=r0f_TVe8GSuYGHhKCNA8jgRcblH_BmaH6ibOabQMPlk='/>
                </div>
                <div className="post-footer">
                    <ChatBubbleOutlineIcon className='bubble' fontSize="small" />
                    <RepeatIcon className='retweet' fontSize="small" />
                    <FavoriteBorderIcon className='favorite' fontSize="small" />
                    <PublishIcon className='pub' fontSize="small" />
                </div>
            </div>
        </div>
    )
};

export default Post;