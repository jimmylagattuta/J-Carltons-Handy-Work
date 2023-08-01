import { useContext } from 'react';
import { CartContext } from '../../components/CartContext';

const Cart = () => {
    const { addCartItem, cartCarlton } = useContext(CartContext);

    if (cartCarlton && cartCarlton.cartItems.length > 0) {
        return (
            <div>
                {cartCarlton.cartItems.map((item, index) => {
                    return (
                        <div key={index} className='cart-item'>
                            {item.id}
                        </div>
                    );
                })}
            </div>
        );
    }

    return <div className='min-height'>Your Cart is Empty</div>;
};

export default Cart;
