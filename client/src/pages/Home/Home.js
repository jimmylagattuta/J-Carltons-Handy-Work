import heroImage from '../../assets/patio.jpg';
import stampImage from '../../assets/stamp.png';
import featuredImage from '../../assets/services.jpg';

import { useContext } from 'react';
import { CartContext } from '../../components/CartContext';
import './Home.css';

const Home = () => {
    const { addCartItem, cartCarlton } = useContext(CartContext);

    return (
        <div className='App'>
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
            <div className='best-seller-section'>
                <div className='section-container'>
                    <div className='best-seller-grid'>
                        <div className='best-seller-item'>
                            <div className='best-seller-image'></div>
                            <h3 className='best-seller-title'>Service</h3>
                            <button
                                className='button update-button'
                                onClick={() => {
                                    addCartItem(123);
                                }}>
                                <i className='fas fa-plus'></i>
                                {cartCarlton ? cartCarlton.cartItems.length : 0}
                            </button>
                        </div>
                        <div className='best-seller-item'>
                            <div className='best-seller-image'></div>
                            <h3 className='best-seller-title'>Service</h3>
                        </div>
                        <div className='best-seller-item'>
                            <div className='best-seller-image'></div>
                            <h3 className='best-seller-title'>Service</h3>
                        </div>
                        <div className='best-seller-item'>
                            <div className='best-seller-image'></div>
                            <h3 className='best-seller-title'>Service</h3>
                        </div>
                    </div>
                    <div className='best-seller-button-container'>
                        <a href='' className='best-seller-button button'>
                            Shop Bestsellers
                        </a>
                    </div>
                </div>
            </div>
            <div className='featured-section'>
                <div className='left-featured'>
                    <h2 className='featured-title'>Quality Service</h2>
                    <p className='featured-text'>
                        Our handymen provide professional services that will
                        last.
                    </p>
                    <div className='featured-button-container'>
                        <a href='' className='featured-button button'>
                            Shop Services
                        </a>
                    </div>
                </div>
                <div
                    className='right-featured'
                    style={{ backgroundImage: `url(${featuredImage})` }}></div>
            </div>
            <div className='home-contact-section'>
                <div className='contact-image-container'>
                    <img src={stampImage} alt='' className='contact-image' />
                </div>
                <div className='contact-section-info'>
                    <h2 className='contact-info-title'>Talk To Our Team</h2>
                    <p className='contact-info-text'>
                        If you’d like to book or enquire about one of our
                        services, get in touch with our handyman experts:
                    </p>
                    <div className='contact-info-icons'>
                        <div className='contact-icon-container'>
                            <div className='contact-icon'></div>
                            <div className='contact-icon-info'>
                                <a href='' className='contact-info-link'>
                                    youremail@mail.com
                                </a>
                            </div>
                        </div>
                        <div className='contact-icon-container'>
                            <div className='contact-icon'></div>
                            <div className='contact-icon-info'>
                                <a href='' className='contact-info-link'>
                                    (555) 555-5555
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
