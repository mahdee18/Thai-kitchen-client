import React from 'react';
import Home from '../components/MainHome/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;