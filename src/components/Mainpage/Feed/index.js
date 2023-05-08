import './index.css'
import Tweetbox from './tweetbox';
import Feedcontent from './feedcontent';
import Post from './post'

//this is logic and style for the entire feed including the box at the top

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <h2 className="feed-header">Home</h2>
            {/* Textbox to tweet */}
            <Tweetbox />
            {/* Feed Content/Posts */}
            <Post />
        </div>
    )
}

export default Feed;