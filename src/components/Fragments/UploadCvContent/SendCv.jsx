import { useState } from "react";
import PdfIcon from '../../../assets/pepicons-print_cv.png'


const SendCv = () => {
    const [fileName, setFileName] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        setFileName(file.name);
        }
    };

    return (
        <div>
            <div className="upload-container mt-5">
                <label htmlFor="file-input" className="file-drop-area">
                    <img src={PdfIcon} width={70} className="file-icon" />
                    {fileName ? (
                    <p className="file-name">{fileName}</p>
                    ) : (
                    <>
                        <p className="upload-text">Send CV file</p>
                        <p className="format-text">Format via PDF</p>
                    </>
                    )}
                </label>
                <input id="file-input" type="file" accept=".pdf" onChange={handleFileChange} />
                <button className="submit-btn mt-5">Submit</button>
            </div>
        </div>
    )
}

export default SendCv;