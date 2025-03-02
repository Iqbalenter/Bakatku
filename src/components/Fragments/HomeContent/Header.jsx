import BakatKuLogo from '../../../assets/BakatKuLogos.png'

const Header = () => { 
  return ( 
    <div className="home-header">
      <header className='container-fluid'>
        <div className="home-logo">
          <img src={BakatKuLogo} width={50}/>
          <h1>BakatKuAI</h1>
        </div>

        <div className="home-hero">
          <h4>Temukan potensi terbaikmu dengan aplikasi BakatkuAI!</h4>
          <p>Dengan fitur pemindaian CV yang canggih, kami membantu kamu mengenali dan mempersonalisasi keterampilan yang kamu miliki.</p>
        </div>

        <div className="header-button">
          <a className='btn'>Get Started</a>
        </div>
      </header>
    </div>
  )
}

export default Header;
