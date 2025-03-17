import BackIcon from "../../../assets/back.png";
import { NavLink } from "react-router";

const BackButton = () => {
    return (
        <div className="back-button">
            <NavLink to="/login" className="back"><img src={BackIcon}/></NavLink>
        </div>
    )
}

export default BackButton;