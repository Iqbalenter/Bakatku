import ResumeIcon from "../../../assets/Resume.png"
import AiIcon from "../../../assets/AIFile.png"

const Card = () => {
    return (
        <div className="Card">
            <div className="title">
                <h3>Hanya 2 langkah saja</h3>
            </div>

            <div className="cards">
                <div className="card-1">
                    <div className="card-icon">
                        <img src={ResumeIcon}/>
                    </div>
                    <div className="card-description">
                        <p>
                        Scan CV ini dapat mempersonalisasi keterampilan Anda dengan cepat dan efisien.
                        </p>
                    </div>
                </div>
                <div className="card-2">
                    <div className="card-icon">
                        <img src={AiIcon}/>
                    </div>
                    <div className="card-description">
                        <p>
                        Dapatkan hasil dari analisa AI Mengenai skill kamu
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;