import React from 'react';
import Navbar from '../../share/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../share/Footer/Footer';

const RegisterLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-400px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RegisterLayout;