import React from 'react';
import Header from '../Header/Header';
import App from '../../App';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='md:mx-10 lg:mx-10'>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Home;