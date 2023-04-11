import React from 'react';
import locationImg from "../../assets/Icons/Frame-4.png";
import salaryImg from "../../assets/Icons/Frame.png";
import { Link } from 'react-router-dom';

const LoadJob = ({load}) => {
    const {
      _id,
      company_name,
      company_logo_url,
      company_address,
      contact_info,
      phone,
      email,
      website,
      job_title,
      education,
      job_type,
      job_location,
      job_requirements,
      job_description,
      salary,
    } = load;
    return (
      <div className=" col-span-4">
        <div className="border-2 p-3 flex justify-between items-center">
          <div className="">
            <div className="flex gap-4  ">
              <div>
                <img src={company_logo_url} alt="" />
              </div>
              <div className='mt-4'>
                <h1>{company_name}</h1>
                <button className="bg-blue-50 p-2 rounded-md">
                  {job_type}
                </button>
                <div className="flex">
                  <img src={locationImg} alt="" className="" />
                  <span className="mr-2">{job_location}</span>
                  <img src={salaryImg} alt="" />
                  {salary}
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link to={`/details/${_id}`} className=" bg-blue-400 p-2 rounded">
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
};

export default LoadJob;