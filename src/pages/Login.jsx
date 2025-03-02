import MailLogo from "../assets/ic_baseline-email.png"
import PasswordLogo from "../assets/mdi_password.png"

const Login = () => {
    return (
        <div>
            <div className="login-title">
                <h3>Login</h3>
            </div>

            <div className="login-form">
                <form>
                <div className="form-container">
                    <div className="input-box">
                        <span className="icon"><img src={MailLogo}/></span>
                        <input type="email" placeholder="Email"/>
                    </div>

                    <div className="input-box">
                        <span className="icon"><img src={PasswordLogo}/></span>
                        <input type="password" placeholder="Password"/>
                        <span className="toggle-password">
                        <i className="fas fa-eye"></i>
                        </span>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login;