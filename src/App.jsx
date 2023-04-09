import { useState } from 'react'
import './App.css'
import user from './assets/Images/ak.jpg';

function App() {
 
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap:6 my-10">
      <div className='text-justify'>
        <h1 className="text-3xl font-bold">One Step</h1>
        <h1 className="text-3xl font-bold">Closer To Your</h1>
        <h1 className="text-blue-400 text-3xl font-bold">Dream Job</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="bg-blue-400 text-white rounded-md p-2">
          Get Started
        </button>
      </div>
      <div>
        <img className=" object-cover" src={user} alt="" />
      </div>
    </div>
  );
}

export default App
