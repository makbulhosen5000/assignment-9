import React from 'react';
import account from '../../assets/Icons/Frame-1.png'
import creative from '../../assets/Icons/business 1.png'
import marketing from '../../assets/Icons/accounts 1.png'
import eng from '../../assets/Icons/chip 1.png'

const JobCategory = () => {
    return (
      <div>
        <div className='text-center'>
          <h1 className=' text-3xl font-bold my-5'>Job Category List</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 text-center my-10 gap-4">
          <div className="bg-blue-100 rounded-md p-10 text-justify">
            <img src={account} alt="" />
            <p>Account & Finance</p>
            <p>300 Jobs Available</p>
          </div>
          <div className="bg-blue-100 rounded-md p-10 text-justify">
            <img src={creative} alt="" />
            <p>Creative Design</p>
            <p>100 Jobs Available</p>
          </div>
          <div className="bg-blue-100 rounded-md p-10 text-justify">
            <img src={marketing} alt="" />
            <p>Marketing & Sales</p>
            <p>150 Jobs Available</p>
          </div>
          <div className="bg-blue-100 rounded-md p-10 text-justify">
            <img src={eng} alt="" />
            <p>Engineering Job</p>
            <p>250 Jobs Available</p>
          </div>
        </div>
      </div>
    );
};

export default JobCategory;