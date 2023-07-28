// import React from 'react'
import { useState } from 'react';
import Data from '../../Data/Data'
import Biodata from '../Biodata/Biodata';
import Cart from '../Cart/Cart';
import './Shop.css'


const Shop = () => {
    const userData = Data;
    const [users, setUsers] = useState(userData);
    const [cart, setCart] = useState([]);
    
    const handleAddRequest = (users) => {
        const newCart = [...cart, users];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='biodata-container'>
                {
                    users.map(user => <Biodata user={user} handleAddRequest={handleAddRequest}></Biodata>)
                }
            </div>
            <div className='cart-container'> 
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
 
export default Shop;    