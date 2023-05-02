import React from 'react';
import Header from '../../share/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../share/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;