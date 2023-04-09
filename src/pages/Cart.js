// import { getNodeText } from '@testing-library/react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, clearCart, decrementCount, getTotals } from '../store/cartSlice';
import { remove } from '../store/cartSlice';

import { useState } from 'react';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.cartItems);
    const cart = useSelector((state) => state.cart);
    
    useEffect(()=>{
        dispatch(getTotals())
    })

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    let total = () => {
        return dispatch(getTotals())
    }
    // console.log(products);

    const Clear = () => {
        return dispatch(clearCart());
    }

    const addCount = (product) => {
        dispatch(add(product))
    }

    const decCount = (product) => {

        dispatch(decrementCount(product))

    }

    if (products.length === 0) {
        return <h2>Nothing to show in Cart</h2>
    }

    return (
        <div>
            <div className='carttt' style={{ color: '#513282' }}><h3>CART</h3></div>

            <div className="cartWrapper">

                {products.map((product) => (
                    <div className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <div>
                            <div className='btnpm'>
                                <button onClick={() => { return addCount(product) }}>+</button>
                                <>{product.itemQuantity}</>
                                <button onClick={() => { return decCount(product) }}>-</button>
                            </div>
                        </div>

                        <h5>₹{product.itemQuantity * product.price}</h5>

                        <button

                            className="btn"
                            onClick={() => handleRemove(product)}
                        >
                            Remove
                        </button>
                    </div>
                ))}


                <div>

                    <button  className='btn' onClick={() => {
                        return Clear();
                    }}>ClearAll</button>

                    <div>
                    <h3 style={{ color: '#513282'}}>TotalPrice : ₹{cart.cartTotalAmount} </h3>
                    <h3 style={{ color: '#513282' , marginTop:'-20px' }}>TotalQuantity : {cart.cartTotalQuantity} </h3>
                    </div>

                </div>
            </div>

        </div>
    );
};


export default Cart;
