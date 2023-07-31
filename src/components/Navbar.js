import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const items = useSelector((state) => state.cart.cartItems);
    
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
<<<<<<< HEAD
            <Link to='/' className="logo"><h2>Shopping Cart App</h2></Link>
=======
            <Link to='/' className="logo"><h2>E Commerce App</h2></Link>
>>>>>>> c0b3def6c27a19c820dc40e464fd118579bb6e85
            <div className='links'>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <Link className="cartcount" to="/cart">🛒<strong>:</strong> <strong>{items.length}</strong></Link>
            </div>
        </div>
    );
};

export default Navbar;
