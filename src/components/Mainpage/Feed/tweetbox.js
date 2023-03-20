
import { Avatar,Button } from '@material-ui/core';
import './tweetbox.css'

function Tweetbox () {
    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox-input">
                    <Avatar className="tweetbox-avatar"></Avatar>
                    <input placeholder="Whats happening?" type="text"></input>
                </div>
                <Button className="tweetbox-button">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox;