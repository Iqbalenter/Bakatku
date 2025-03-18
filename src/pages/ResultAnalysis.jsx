import BackButton from "../components/Fragments/ResultAnalysisContent/BackButton";
import SkillProgress from "../components/Fragments/ResultAnalysisContent/SkillProgress";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

import '../css/result-analysis.css';

const ResultAnalysis = () => {
    return (
        <div className="result-analysis-container">
            <BackButton/>
            <SkillProgress/>
            <Navbar/>
            <Footer/>
        </div>
    )
}

export default ResultAnalysis;