import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import api from "../../api/axios"; // pastikan path ini benar

import HomeLogo from "../../assets/home.png";
import Scan from "../../assets/Scan.png";
import LoginLogo from "../../assets/login.png";
import DashboardLogo from "../../assets/dashboard.png";
import SkillLogo from "../../assets/skill.png";
import UserLogo from "../../assets/user.png";

import Image from "../Elements/Image/Index";
import "../../css/navbar.css";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await api.get('/auth/check');
                if (response.status === 200 && response.data.success) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                setIsLoggedIn(false); 
                console.error("Auth check failed:", error);
            }
        };

        checkAuth();
    }, []);

    return (
        <div className="Navbar">
            {!isLoggedIn ? (
                <ul>
                    <li><NavLink to="/"><img src={HomeLogo} alt="Home" /></NavLink></li>
                    <li><NavLink to="/login"><Image width={35} src={Scan} alt="Scan"/></NavLink></li>
                    <li>
                        <NavLink to="/login" className="login">
                            <p><span><img src={LoginLogo} alt="Login" /></span>Login</p>
                        </NavLink>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li><NavLink to="/"><Image src={HomeLogo} alt="Home" /></NavLink></li>
                    <li><NavLink to="/dashboard"><Image src={DashboardLogo} alt="Dashboard" /></NavLink></li>
                    <li><NavLink to="/send-cv"><Image width={35} src={Scan} alt="Scan" /></NavLink></li>
                    <li><NavLink to="/article"><Image src={SkillLogo} alt="Skill" /></NavLink></li>
                    <li><NavLink to="/profile"><Image src={UserLogo} alt="User" /></NavLink></li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
