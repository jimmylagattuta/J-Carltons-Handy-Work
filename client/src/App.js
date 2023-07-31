import { Switch, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Error from './pages/Error/Error';
import './App.css';

const App = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    }, [pathname]);
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/cart'>
                    <Cart />
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
            <Footer />
        </>
    );
};

export default App;
