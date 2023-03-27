import Signupforms from "./signupuser";
import './index.css';
import TwitterIcon from '@material-ui/icons/Twitter';


function Signup() {
    return (
        <div className="register-main">
            <TwitterIcon className="twitter-logo" />
            <Signupforms />
        </div>
    )
}

export default Signup;