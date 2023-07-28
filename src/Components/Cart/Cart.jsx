import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const user = cart[i];
        total = total + user.salary;
    } 

    return (
        <div className='cart'>
            <h2>Overview</h2>
            <h3>Total Request Sent: {cart.length}</h3>
            <h3>Total Salary: {total} $</h3>
        </div>
    );
};

export default Cart;    