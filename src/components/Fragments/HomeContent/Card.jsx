import ResumeIcon from "../../../assets/Resume.png"
import AiIcon from "../../../assets/AIFile.png"
import { Heading3 } from "../../Elements/Heading/Index";
import Paragraph from "../../Elements/Paragraph/Index";
import Image from "../../Elements/Image/Index";

const Card = () => {
    return (
        <div className="Card">
            <div className="title">
                <Heading3>Hanya 2 langkah saja</Heading3>
            </div>

            <div className="cards">
                <div className="card-1">
                    <div className="card-icon">
                        <Image src={ResumeIcon}/>
                    </div>
                    <div className="card-description">
                        <Paragraph>
                        Scan CV ini dapat mempersonalisasi keterampilan Anda dengan cepat dan efisien.
                        </Paragraph>
                    </div>
                </div>
                <div className="card-2">
                    <div className="card-icon">
                        <Image src={AiIcon}/>
                    </div>
                    <div className="card-description">
                        <Paragraph>
                        Dapatkan hasil dari analisa AI Mengenai skill kamu
                        </Paragraph>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;