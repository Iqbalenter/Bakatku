import BackButton from "../components/Fragments/ResultAnalysisContent2/BackButton";
import Result from "../components/Fragments/ResultAnalysisContent2/ResultAnalysis";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

import '../css/result-analysis2.css';

const ResultAnalysis2 = () => {
    return (
        <div className="result-analysis-container2">
            <BackButton/>
            <Result/>
            <Navbar/>
            <Footer/>
        </div>
    )
}

export default ResultAnalysis2;