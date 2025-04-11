import MailLogo from "../../../assets/ic_baseline-email.png";
import VerticalIcon from "../../../assets/vertical-line.png";
import Image from "../../Elements/Image/Index";

const Content = () => {
    return (
        <div className="forgot-password-content">
            <div className="forgot-password-title">
                <h1>Lupa Password?</h1>
                <p>Kami akan mengirimkan instruksi untuk mengatur ulang password Anda.</p>
            </div>
            <div className="forgot-password-form">
                <form>
                    <div className="form-container">
                        <div className="input-box">
                            <span className="icon"><Image width={17} src={MailLogo} /></span>
                            <span className="icon-v"><Image src={VerticalIcon} /></span>
                            <input
                            type="email"
                            name="email"
                            />
                        </div>
                    </div>
                </form>

                <div className="profile-button">
                    <button className="profile-edit-button">
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Content;