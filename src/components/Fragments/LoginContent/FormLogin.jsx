import MailLogo from "../../../assets/ic_baseline-email.png";
import PasswordLogo from "../../../assets/mdi_password.png";
import VerticalIcon from "../../../assets/vertical-line.png";
import ShowIcon from "../../../assets/show.png";
import HiddenIcon from "../../../assets/hidden.png";

import { useState } from "react";
import { Heading3 } from "../../Elements/Heading/Index";
import Image from "../../Elements/Image/Index";
import Span from "../../Elements/Span/Index";
const FormLogin = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    
    return (
        <div className="login-form-container">
            <div className="login-title">
                <Heading3>Login</Heading3>
            </div>

            <div className="login-form">
                <form>
                <div className="form-container">
                    <div className="input-box">
                        <span className="icon"><Image src={MailLogo}/></span>
                        <span className="icon-v"><Image src={VerticalIcon}/></span>
                        <input type="email" placeholder="Email"/>
                    </div>

                    <div className="input-box">
                        <span className="icon"><Image src={PasswordLogo}/></span>
                        <span className="icon-v"><Image src={VerticalIcon}/></span>
                        <input className="password-input" type={showPassword ? "text" : "password"} placeholder="Password"/>
                        <span className="toggle-password" onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}>
                            <Image src={showPassword ? HiddenIcon : ShowIcon} width={20}/>
                        </span>
                    </div>
                </div>
                </form>
            </div>

            <div className="login-button-container">
                <button className="login-button">Selanjutnya</button>
            </div>
        </div>
    )
}

export default FormLogin;