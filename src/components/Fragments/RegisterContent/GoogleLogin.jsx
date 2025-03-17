import GoogleLogo from "../../../assets/devicon_google.png";
import MailIcon from "../../../assets/iconamoon_email-thin.png"

import { NavLink } from "react-router";

const GoogleLogin = () => {
    return (
        <div>
            <div className="or-separator">
                <div class="line1"></div>
                <div class="text">Or</div>
                <div class="line2"></div>
            </div>


            <div className="google-button-container">
                <button className="google"><img src={GoogleLogo} width={25}/>With Google</button>
            </div>
        </div>
    )
}

export default GoogleLogin;