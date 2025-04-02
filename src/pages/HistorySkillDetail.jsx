import '../css/history-skill-detail.css';

import BackButton from "../components/Fragments/HistorySkillDetailContent/BackButton"
import SkillsChart from '../components/Fragments/HistorySkillDetailContent/SkillsChart';
import SkillList from '../components/Fragments/HistorySkillDetailContent/SkillList';
import SkillDescription from '../components/Fragments/HistorySkillDetailContent/SkillDescription';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';


const HistorySkillDetail = () => {
    return (
        <div>
            <BackButton/>
            <SkillsChart/>
            <SkillList/>
            <SkillDescription/>
            <Navbar/>
            <Footer/>
        </div>
    )
}

export default HistorySkillDetail;