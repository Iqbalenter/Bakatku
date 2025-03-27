import BackIcon from "../../../assets/back.png";
import { NavLink } from "react-router";

const BackButton = () => {
    return (
        <div className="back-button d-flex">
            <NavLink to="/" className="back"><img src={BackIcon}/></NavLink>
            <h3>Hasil analisis AI</h3>
        </div>
    )
}

export default BackButton;