import React from 'react';
import Navbar from '../../share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../share/Footer/Footer';

const AboutLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AboutLayout;