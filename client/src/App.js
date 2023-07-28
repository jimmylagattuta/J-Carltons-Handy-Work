import logo from './logo.jpg';
import heroImage from './patio.jpg';
import './App.css';

function App() {
    return (
        <div className='App'>
            <nav className='main-nav'>
                <div className='nav-left'>
                    <div className='logo-container'>
                        <a href='' className='logo-link'>
                            <img src={logo} alt='' className='logo-image' />
                        </a>
                    </div>
                    <div className='links'>
                        <a href='' className='nav-liink'>
                            about
                        </a>
                        <a href='' className='nav-liink'>
                            contact
                        </a>
                        <a href='' className='nav-liink'>
                            services
                        </a>
                        <a href='' className='nav-liink'>
                            location
                        </a>
                    </div>
                </div>
                <div className='sign-in'>
                    Sign up <span className='sign-up-icon'></span>
                </div>
            </nav>
            <header
                className='home-hero'
                style={{ backgroundImage: `url(${heroImage})` }}>
                <div className='hero-content'>
                    <h1 className='hero-title'>J Carltons</h1>
                    <h2 className='hero-title'>Handywork</h2>
                    <div className='hero-search'>
                        <input type='text' paceholder='search services' />
                    </div>
                    <div className='hero-links'>
                        <a href='' className='hero-link'>
                            shop recent
                        </a>
                        <a href='' className='hero-link'>
                            shop all
                        </a>
                    </div>
                </div>
            </header>
            <footer className='main-footer'>
                <div className='footer-links'>
                    <div className='footer-column'>
                        <div className='footer-logo-container'>
                            <img
                                src={logo}
                                alt=''
                                className='footer-logo-image'
                            />
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
                    <div className='footer-icons'></div>
                    <div className='footer-apps'></div>
                </div>
                <div className='footer-info'>
                    <p className='footer-text'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Earum sed minima quod id labore inventore officia
                        atque magni quas, est exercitationem. Maiores
                        exercitationem officia, vel amet incidunt unde sunt
                        veniam!
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default App;
