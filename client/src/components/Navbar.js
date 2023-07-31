import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='main-nav'>
            <div className='nav-left'>
                <div className='logo-container'>
                    <NavLink
                        to='/'
                        className={(isActive) =>
                            'logo-link' + (!isActive ? ' unselected' : '')
                        }>
                        <img src={logo} alt='' className='logo-image' />
                    </NavLink>
                </div>
                <div className='links'>
                    <NavLink
                        to='/about'
                        className={(isActive) =>
                            'nav-link' + (!isActive ? ' unselected' : '')
                        }>
                        About
                    </NavLink>
                    <NavLink
                        to='/contact'
                        className={(isActive) =>
                            'nav-link' + (!isActive ? ' unselected' : '')
                        }>
                        Contact
                    </NavLink>
                    <NavLink
                        to='/services'
                        className={(isActive) =>
                            'nav-link' + (!isActive ? ' unselected' : '')
                        }>
                        Services
                    </NavLink>
                    <NavLink
                        to='/locations'
                        className={(isActive) =>
                            'nav-link' + (!isActive ? ' unselected' : '')
                        }>
                        locations
                    </NavLink>
                </div>
            </div>
            <div className='sign-in'>
                <NavLink
                    to='/cart'
                    className={(isActive) =>
                        'nav-link' + (!isActive ? ' unselected' : '')
                    }>
                    <i className='fas fa-shopping-cart'></i>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
