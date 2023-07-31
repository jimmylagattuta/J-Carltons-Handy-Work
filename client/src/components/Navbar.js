import logo from '../assets/logo.jpg';

import './Navbar.css';

const Navbar = () => {
    return (
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
                <i className='fas fa-shopping-cart'></i>
            </div>
        </nav>
    );
};

export default Navbar;
