import React from 'react';
import locationImg from '../../assets/Icons/Frame-4.png'
import salaryImg from "../../assets/Icons/Frame.png";

const FeaturedJob = ({ data }) => {
  const { company_logo_url, company_name, job_type, job_location, salary } =
    data;
  console.log(data);
  return (
    <div>
      <div className="bg-blue-50 border-2 rounded-md">
        <div className="m-4 gap-4">
          <img src={company_logo_url} alt="" />
          <h1 className="py-2">{company_name}</h1>
          <button className="bg-white p-2 rounded-md ml-2">{job_type}</button>
          <div className="flex gap-2 m-2">
            <img src={locationImg} alt="" />
            {job_location}
            <img src={salaryImg} alt="" />
            {salary}
          </div>
          <button className=" bg-blue-400 p-2 rounded">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;