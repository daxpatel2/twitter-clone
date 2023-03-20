import './index.css'
import Tweetbox from './tweetbox';
import Feedcontent from './feedcontent';

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <h2 className="feed-header">Home</h2>
            {/* Textbox to tweet */}
            <Tweetbox />
            {/* Feed Content/Posts */}
            <Feedcontent />
        </div>
    )

}

export default Feed;