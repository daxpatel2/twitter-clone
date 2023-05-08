import React from 'react';
import './post.css'; //this will handel styiling within the post
import img from './profile-icon.png';
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
function Post( { displayName, text, profilePic, image }) {
    return (
        <div className='post'>
            <div className='post-avatar'>
                <Avatar src={img}/>
            </div>
            <div className='post-body'>
                <div className='post-header'>
                    <div className='post-header-text'>
                        <h3>
                            Dax Patel
                            <span>
                                <VerifiedUserIcon className="post-badge" />
                            </span>
                        </h3>
                    </div>
                    <div className='header-discription'>
                        <p> I challange u to a duel</p>
                    </div>
                </div>
                <div className='image-container'>
                    <img src='https://th.bing.com/th/id/R.747550c5be6bdf0db71cfca47ddde441?rik=7bdkh3Y1yUuwcQ&pid=ImgRaw&r=0'/>
                </div>
                <div className="post-footer">
                    <ChatBubbleOutlineIcon className='bubble' fontSize="small" />
                    <RepeatIcon className='retweet' fontSize="small" />
                    <FavoriteBorderIcon className='favorite' fontSize="small" />
                    <PublishIcon className='pub' fontSize="small" />
                </div>
            </div>
        </div>


        // <div className='post'>
        //     <img className='profile-pic' src={profilePic} alt="avatar" />
        //     <h2 className='display-name'>{displayName}</h2>
        //     <h3 className='text'>{text}</h3>
        // </div>
    )
};

export default Post;