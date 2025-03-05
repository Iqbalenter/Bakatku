import MailLogo from "../../../assets/ic_baseline-email.png";
import PasswordLogo from "../../../assets/mdi_password.png";
import VerticalIcon from "../../../assets/vertical-line.png";
import ShowIcon from "../../../assets/show.png";
import HiddenIcon from "../../../assets/hidden.png";
import PersonIcon from "../../../assets/wpf_name.png"

import { useState } from "react";
import { Heading3 } from "../../Elements/Heading/Index";
import Image from "../../Elements/Image/Index";
import Span from "../../Elements/Span/Index";
const FormRegister = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    
    return (
        <div className="register-form-container">
            <div className="register-title">
                <Heading3>Register</Heading3>
            </div>

            <div className="register-form">
                <form>
                <div className="form-container">
                    <div className="input-box">
                        <span className="icon"><Image src={PersonIcon}/></span>
                        <span className="icon-v"><Image src={VerticalIcon}/></span>
                        <input type="text" placeholder="Nama"/>
                    </div>

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

            <div className="register-button-container">
                <button className="register-button">Selanjutnya</button>
            </div>
        </div>
    )
}

export default FormRegister;