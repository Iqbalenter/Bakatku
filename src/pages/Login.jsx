import BackButton from "../components/Fragments/LoginContent/BackButton"
import FormLogin from "../components/Fragments/LoginContent/FormLogin"
import GoogleLogin from "../components/Fragments/LoginContent/GoogleLogin"
import Footer from "../components/Layouts/Footer"
import Navbar from "../components/Layouts/Navbar"
import "../css/login.css"

const Login = () => {
    return (
        <div className="login-container">
            <BackButton/>
            <FormLogin/>
            <GoogleLogin/>
            <Navbar/>
            <Footer/>
        </div>
    )
}

export default Login;