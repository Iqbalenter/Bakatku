import { useState } from "react";
import HomeLogo from "../../assets/home.png";
import Scan from "../../assets/Scan.png";
import LoginLogo from "../../assets/login.png";
import DashboardLogo from "../../assets/dashboard.png";
import SkillLogo from "../../assets/skill.png";
import UserLogo from "../../assets/user.png";

import { NavLink } from "react-router";
import Image from "../Elements/Image/Index";

import "../../css/navbar.css";
const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="Navbar">
            {!isLoggedIn ? (
                <ul>
                    <li><NavLink to="/"><img src={HomeLogo}/></NavLink></li>
                    <li><Image width={35} src={Scan}/></li>
                    <li>
                        <NavLink to="/login" className="login"><p><span><img src={LoginLogo}/></span>Login</p></NavLink>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li><Image src={HomeLogo} alt="Home" /></li>
                    <li><Image src={DashboardLogo} alt="Dashboard" /></li>
                    <li><Image width={35} src={Scan} alt="Scan" /></li>
                    <li><Image src={SkillLogo} alt="Skill" /></li>
                    <li><Image src={UserLogo} alt="User" /></li>
                </ul>
            )}
        </div>
    )
}

export default Navbar;