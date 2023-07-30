import logo from '../assets/logo.jpg';

const Footer = () => {
    return (
        <footer className='main-footer'>
            <div className='footer-links'>
                <div className='footer-column'>
                    <div className='footer-logo-container'>
                        <img src={logo} alt='' className='footer-logo-image' />
                    </div>
                </div>
                <div className='footer-column'>
                    <h4 className='footer-header'>Services</h4>
                    <a href='' className='footer-link'>
                        Fix
                    </a>
                    <a href='' className='footer-link'>
                        Build
                    </a>
                    <a href='' className='footer-link'>
                        Landscape
                    </a>
                    <a href='' className='footer-link'>
                        Cleaning
                    </a>
                    <a href='' className='footer-link'>
                        Moving
                    </a>
                </div>
                <div className='footer-column'>
                    <h4 className='footer-header'>Resources</h4>
                    <a href='' className='footer-link'>
                        Partner
                    </a>
                    <a href='' className='footer-link'>
                        Career
                    </a>
                </div>
                <div className='footer-column'>
                    <h4 className='footer-header'>About Us</h4>
                    <a href='' className='footer-link'>
                        Carlton
                    </a>
                    <a href='' className='footer-link'>
                        Our Team
                    </a>
                    <a href='' className='footer-link'>
                        Locations
                    </a>
                </div>
            </div>
            <div className='footer-socials'>
                <div className='footer-icons'>
                    <div className='social-icon'>
                        <i className='fab fa-facebook-square'></i>
                    </div>
                    <div className='social-icon'>
                        <i className='fab fa-instagram'></i>
                    </div>
                    <div className='social-icon'>
                        <i className='fab fa-youtube'></i>
                    </div>
                    <div className='social-icon'>
                        <i className='fab fa-linkedin'></i>
                    </div>
                </div>
                <div className='footer-apps'>
                    <img
                        src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
                        alt=''
                        className='footer-app-image'
                    />
                    <img
                        src='https://lh3.googleusercontent.com/RyLoNcOmb91IxHIP9NWfC82chbsCsT-5R25efns1FmuM8xz6znE4CRjIEBosZ1FH2xG1UqH6Axyp-vPFnm4sazbrsaB-S0QT_cN9uWU9UKoSQYCjYQ=s0'
                        alt=''
                        className='footer-app-image'
                    />
                </div>
            </div>
            <div className='footer-info'>
                <p className='footer-text'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Earum sed minima quod id labore inventore officia atque
                    magni quas, est exercitationem. Maiores exercitationem
                    officia, vel amet incidunt unde sunt veniam!
                </p>
            </div>
        </footer>
    );
};

export default Footer;
