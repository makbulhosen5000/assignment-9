import React from 'react';
import locationImg from "../../assets/Icons/Frame-4.png";
import salaryImg from "../../assets/Icons/Frame.png";
import { Link } from "react-router-dom";


const Jobs = ({ data }) => {
    console.log(data);
  return (
    <div>
      <div className="bg-blue-50 border-2 rounded-md">
        <div className="m-4 gap-4">
          <img src="" alt="" />
          <h1 className="py-2">sdf</h1>
          <button className="bg-white p-2 rounded-md ml-2">sadf</button>
          <div className="flex gap-2 m-2">
            <img src={locationImg} alt="" />
            {job_location}
            <img src={salaryImg} alt="" />
            {salary}
          </div>
          <p>
            <Link to={`/details/${id}`} className=" bg-blue-400 p-2 rounded">
              View Details
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jobs;