import Logos from "../../assets/Logos.png"
import "../../css/footer.css"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-header">
                <img src={Logos}/>
                <h4>BakatkuAI</h4>
            </div>

            <h3>Cari potensi anda</h3>
        </div>
    )
}

export default Footer;