import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Main = () => {
    return (
        <div className='bg-blue-950 '> 
            
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            
        </div>
    );
};

export default Main;