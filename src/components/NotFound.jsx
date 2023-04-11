import React from 'react';
import notFound from '../assets/Images/not-found.jpg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <img src={notFound} alt="" className='w-[25%]' />
        <h1 className='text-3xl'>Page Not Found</h1>
        
      </div>
    );
};

export default NotFound;