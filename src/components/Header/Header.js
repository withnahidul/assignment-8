import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <h1 className='header-text'>NiS Bag Store</h1>
            <div>
                <a href="/home">Home</a>
                <a href="/cart">Cart</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;