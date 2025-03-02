import { useState } from "react";
import HomeLogo from "../../assets/home.png";
import Scan from "../../assets/Scan.png";
import LoginLogo from "../../assets/login.png";
import DashboardLogo from "../../assets/dashboard.png";
import SkillLogo from "../../assets/skill.png";
import UserLogo from "../../assets/user.png";
import "../../css/navbar.css";
const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="Navbar">
            {!isLoggedIn ? (
                <ul>
                    <li><img src={HomeLogo}/></li>
                    <li><img width={35} src={Scan}/></li>
                    <li>
                        <p><span><img src={LoginLogo}/></span>Login</p>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li><img src={HomeLogo} alt="Home" /></li>
                    <li><img src={DashboardLogo} alt="Dashboard" /></li>
                    <li><img width={35} src={Scan} alt="Scan" /></li>
                    <li><img src={SkillLogo} alt="Skill" /></li>
                    <li><img src={UserLogo} alt="User" /></li>
                </ul>
            )}
        </div>
    )
}

export default Navbar;