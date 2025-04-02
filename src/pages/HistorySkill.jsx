import '../css/history-skill.css';

import BackButton from '../components/Fragments/HistoryContent/BackButton';
import Content from '../components/Fragments/HistoryContent/Content';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';

const HistorySkill = () => {
    return (
        <div>
            <BackButton/>
            <Content/>
            <Navbar/>
            <Footer/>
        </div>
    )
}

export default HistorySkill;