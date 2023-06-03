import Sidebar from "../Sidebar";
import Widget from "../Widget";
import ExploreMid from "./ExploreMid";

function Explore() {
    return (

        //could fuigure out a way to keep side bar and widget permanant no matter what instead of haveing to 
        //return it each time
        <div className="main">
            <Sidebar className='sidebar'/>
            <ExploreMid className='explore'/>
            <Widget classname='widget'/>
        </div>
    )
}

export default Explore;