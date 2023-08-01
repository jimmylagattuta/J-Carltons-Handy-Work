import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import logo from '../assets/logo.jpg';

import './Navbar.css';

const Navbar = () => {
    const { cartCarlton } = useContext(CartContext);

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
                    <span className='cart-icon-wrapper'>
                        {cartCarlton?.cartItems.length > 0 && (
                            <span className='cart-item-counter'>
                                {cartCarlton.cartItems.length}
                            </span>
                        )}
                        <i className='fas fa-shopping-cart'></i>
                    </span>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
