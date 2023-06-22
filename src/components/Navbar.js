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
            <Link to='/' className="logo"><h2>E Commerce App</h2></Link>
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
