import BackButton from "../components/Fragments/UploadCvContent/BackButton";
import SendCv from "../components/Fragments/UploadCvContent/SendCv";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

import '../css/upload-cv.css'

const UploadCv = () => {
    return (
        <div>
            <BackButton/>
            <SendCv/>
            <Navbar/>
            <Footer/>        
        </div>
    )
}

export default UploadCv;