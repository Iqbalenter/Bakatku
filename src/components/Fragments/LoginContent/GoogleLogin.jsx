import GoogleLogo from "../../../assets/devicon_google.png";

const GoogleLogin = () => {
    return (
        <div>
            <div className="or-separator">
                <div class="line1"></div>
                <div class="text">Or</div>
                <div class="line2"></div>
            </div>


            <div className="google-button-container">
                <button><img src={GoogleLogo}/>With Google</button>
            </div>
        </div>
    )
}

export default GoogleLogin;