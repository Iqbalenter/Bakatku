import BackButton from '../components/Fragments/DashboardProgressContent/BackButton';
import Content from '../components/Fragments/DashboardProgressContent/Content';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';
import '../css/dashboard-progress.css';

const DashboardProgress = () => {
    return (
        <div className='dashboard-progress-container'>
            <BackButton/>
            <Content/>
            <Navbar/>
            <Footer/>
        </div>
    )
}

export default DashboardProgress;