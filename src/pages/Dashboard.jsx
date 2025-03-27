import BackButton from '../components/Fragments/DashboardContent/BackButton';
import Content from '../components/Fragments/DashboardContent/Content';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';

import '../css/dashboard.css';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <BackButton/>
            <Content/>
            <Navbar/>
            <Footer/>
        </div>
    )
}

export default Dashboard;