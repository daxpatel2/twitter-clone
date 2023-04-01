import Signupforms from "./signupuser";
import './index.css';
import TwitterIcon from '@material-ui/icons/Twitter';
//import { AuthProvider } from "../../context/AuthContext";
//<AuthProvider></AuthProvider> wrapper if we need

function Signup() {
    //apply styling to the signup page so that it shrinks and expands with the screen and is responsive
    //youtube video on web dev simplified for help
    return (
        <div className="register-main">
            <TwitterIcon className="twitter-logo" />
            <Signupforms />
        </div>
    )
}

export default Signup;