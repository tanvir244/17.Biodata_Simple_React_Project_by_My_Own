import React from 'react';
import './Header.css'
import logo from '../../image/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;