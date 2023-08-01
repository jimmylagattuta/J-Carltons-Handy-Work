import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartCarlton, setCartCarlton] = useState(null);

    useEffect(() => {
        if (!localStorage.getItem('cartCarlton')) {
            localStorage.setItem(
                'cartCarlton',
                JSON.stringify({ cartItems: [] })
            );
            setCartCarlton({ cartItems: [] });
        } else {
            setCartCarlton(JSON.parse(localStorage.getItem('cartCarlton')));
        }
    }, []);

    const updateCartItemStorage = (data) => {
        localStorage.setItem('cartCarlton', JSON.stringify(data));
        setCartCarlton(data);
    };

    const addCartItem = (id) => {
        updateCartItemStorage({
            ...cartCarlton,
            cartItems: [...cartCarlton.cartItems, { id }],
        });
    };

    return (
        <CartContext.Provider value={{ cartCarlton, addCartItem }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
