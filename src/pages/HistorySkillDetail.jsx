import '../css/history-skill-detail.css';

import SkillsChart from '../components/Fragments/HistorySkillDetailContent/SkillsChart';
import SkillList from '../components/Fragments/HistorySkillDetailContent/SkillList';
import SkillDescription from '../components/Fragments/HistorySkillDetailContent/SkillDescription';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import BackButton from '../components/Elements/BackButton';


const HistorySkillDetail = () => {
    return (
        <div>
            <BackButton to="/history-skill" titleStyle={{margin: "10px 40px", fontWeight: "700" }}>Backend Development</BackButton>
            <SkillsChart/>
            <SkillList/>
            <SkillDescription/>
            <Navbar/>
            <Footer/>
        </div>
    )
}

export default HistorySkillDetail;