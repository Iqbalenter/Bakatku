import BackButton from "../components/Fragments/VerificationEmailContent/BackButton";
import Main from "../components/Fragments/VerificationEmailContent/Main";
import Footer from "../components/Layouts/Footer";

import '../css/verification.css';
const VerificationEmail = () => {
    return (
        <div className="verification-container">
            <BackButton/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default VerificationEmail;