import React from 'react';
import reactLogo from './assets/logo.svg';
// import './App.css';

const HeaderPart = () => {
    return (
        <header className="header">
            <img src={reactLogo} alt="React Logo" />
            <div className="header_div">
                <button className="header_button">Try It Free</button>
            </div>
        </header>
    );
};

export default HeaderPart;