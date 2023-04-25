import './feedcontent.css'; //this will handel styling within the entire feed not includeing the box at the top
import Post from './post'; //going to be a component so import it as a component

//this is logic and style for all the posts and the area they live in 
//grab the images here and pass them to the post component (do a loop or map through the database images and use those for imaage)
function Feedcontent () {
    return (
        <div className='post'>
            <Post displayName={'Dax'} text={'hello does this work'} image={"none"}/>
            <Post displayName={'adon'} text={'hello does this work'}/>
            <Post displayName={'caleb'} text={'hello does this work'}/>
            <Post displayName={'shurya'} text={'hello does this work'}/>
            <Post displayName={'tej'} text={'hello does this work'}/>
        </div>

    )
}

export default Feedcontent;