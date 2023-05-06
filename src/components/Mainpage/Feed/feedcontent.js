import './feedcontent.css'; //this will handel styling within the entire feed not includeing the box at the top
import Post from './post'; //going to be a component so import it as a component
import { db } from '../../../firebase';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';


//this is logic and style for all the posts and the area they live in 
//grab the images here and pass them to the post component (do a loop or map through the database images and use those for imaage)
//we will do a loop and for each item in the database(each post) we will call the Post component and pass the parameters

function Feedcontent ( {userName, profilePic, text} ) {
    const [posts,setPosts] = useState([]);
    const userCollectionRef = collection(db, "posts");
    
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(userCollectionRef);
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getPosts();
        
    });


    return (
        <div className='post'>
            {posts.map((inPost) => { 
                return (
                    <Post displayName={inPost.displayName} text={inPost.text} image={'none'}/>
                )
            })}
            {/* <Post displayName={'Dax'} text={'hello does this work'} image={"none"}/>.
            <Post displayName={'adon'} text={'hello does this work'}/>
            <Post displayName={'caleb'} text={'hello does this work'}/>
            <Post displayName={'shurya'} text={'hello does this work'}/>
            <Post displayName={'tej'} text={'hello does this work'}/> */}
        </div>

    )
}

export default Feedcontent;