// const { createSlice } = require('@reduxjs/toolkit');
import { createSlice } from "@reduxjs/toolkit";
// import {  ToastContainer,toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const initialState ={
    cartItems:[],
    cartTotalQuantity:0,
    cartTotalAmount:0

}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {


            // state.cartItems.push(action.payload)
            
            const itemIndex = state.cartItems.findIndex((item)=>{
                return  item.id === action.payload.id;

            });

        

            if (itemIndex >= 0) {
            
                state.cartItems[itemIndex] = {
                  ...state.cartItems[itemIndex],
                  itemQuantity: state.cartItems[itemIndex].itemQuantity + 1
                }
            }
            else {
                    const tempProductItem = { ...action.payload, itemQuantity: 1};
                    state.cartItems.push(tempProductItem);
                }

            // if(itemIndex1 >= 1) {
            //     state.cartItems[itemIndex1].itemQuantity += 1;
            // }
            // else{
            //     const tempProduct = {...action.payload,itemQuantity:1} ;
            //     state.cartItems.push(tempProduct);
            // }
            
        },

        remove(state, action) {
            state.cartItems.splice(action.payload,1);//(item) => item.id !== action.payload , this isnt working
            
        },

        decrementCount(state,action){
            const itemIndex1 = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
              );
        
              if (state.cartItems[itemIndex1].itemQuantity > 1) {
                state.cartItems[itemIndex1].itemQuantity -= 1;
            }
        },

        clearCart(state, action) {
            state.cartItems = [];
            
        },

        getTotals(state,action){
            let {total,quantity} = state.cartItems.reduce((cartTotal,cartItem)=>{

                const {price , itemQuantity} = cartItem;
                cartTotal.total += price * itemQuantity;
                cartTotal.quantity += itemQuantity;
                return cartTotal;

            },{total:0, quantity:0})

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    },
});

export const { add, remove,additionCount,decrementCount,clearCart, getTotals } = cartSlice.actions;
export {cartSlice};
