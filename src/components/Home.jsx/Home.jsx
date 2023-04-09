import React from 'react';
import Header from '../Navbar/Navbar';
import App from '../../App';
import { Outlet } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';

const Home = () => {
    return (
        <div className='md:mx-10 lg:mx-10'>
            <Header/>
            <Outlet/>
            <JobCategory/>
        </div>
    );
};

export default Home;