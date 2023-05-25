import Sidebar from "../Mainpage/Sidebar";
import Widget from "../Mainpage/Widget";
import ExploreMid from "./ExploreMid";

function Explore() {
    return (

        //could fuigure out a way to keep side bar and widget permanant no matter what instead of haveing to 
        //return it each time
        <div>
            <Sidebar />
            <ExploreMid />
            <Widget />
        </div>
    )
}

export default Explore;