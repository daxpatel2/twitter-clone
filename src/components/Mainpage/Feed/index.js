import './index.css'
import Tweetbox from './tweetbox';
import Post from './post'
import { db } from '../../../firebase';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

//this is logic and style for the entire feed including the box at the top
//add a condition where if there is no image, what to do?
//might have to edit css as well where if there is not image it gets handeled correctly

function Feed() {
        
    // const [posts,setPosts] = useState([]);
    // const userCollectionRef = collection(db, "posts");
    
    // useEffect(() => {
    //     const getPosts = async () => {
    //         const data = await getDocs(userCollectionRef);
    //         setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //what does this line do? Understand this line
    //     };
    //     getPosts();
    // });

    return (
        <div className="feed">
            {/* <h2 className="feed-header">Home</h2>
            <Tweetbox />
            {(posts.reverse()).map((inPost) => {
                return (
                    <Post displayName={inPost.displayName} text={inPost.text} profilePic={inPost.profilePic} displayImg={inPost.displayImg}/>
                )
            })} */}
            hello
        </div>
    )
}

export default Feed;