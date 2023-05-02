import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Navbar/Banner/Banner';
import './Header.css';

const Header = () => {
    return (
        <div className='bg'>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;