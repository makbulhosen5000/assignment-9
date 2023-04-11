import React from 'react';
import Header from '../Navbar/Navbar';
import App from '../../App';
import { Outlet } from 'react-router-dom';
import {Toaster} from "react-hot-toast";

const Home = () => {
    return (
        <div className='md:mx-10 lg:mx-10'>
            <Header/>
            <Outlet/>
            <Toaster/>
        </div>
    );
};

export default Home;