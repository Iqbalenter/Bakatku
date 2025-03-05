import BakatKuLogo from '../../../assets/BakatKuLogos.png'
import { Heading1, Heading4 } from '../../Elements/Heading/Index';
import Image from '../../Elements/Image/Index';
import Paragraph from '../../Elements/Paragraph/Index';

const Header = () => { 
  return ( 
    <div className="home-header">
      <header className='container-fluid'>
        <div className="home-logo">
          <Image src={BakatKuLogo} width={50}/>
          <Heading1>BakatKuAI</Heading1>
        </div>

        <div className="home-hero">
          <Heading4>Temukan potensi terbaikmu dengan aplikasi BakatkuAI!</Heading4>
          <Paragraph>Dengan fitur pemindaian CV yang canggih, kami membantu kamu mengenali dan mempersonalisasi keterampilan yang kamu miliki.</Paragraph>
        </div>

        <div className="header-button">
          <a className='btn'>Get Started</a>
        </div>
      </header>
    </div>
  )
}

export default Header;
