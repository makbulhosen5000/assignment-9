
import { useLoaderData} from 'react-router-dom';
import toast from "react-hot-toast";
import { useEffect, useState } from 'react';
import { addToDb } from '../../../utilitis/fakeDB';


const JobDetails = () => {

  const id = useLoaderData();
  const [jobDetails, setJobDetails] = useState([]);
  //console.log("jobDetails..", jobDetails);
   useEffect(() => {
    fetch("/job.json")
      .then((res) => res.json())
      .then((data) => {
        const job = data.find((item) => item._id == id);
        setJobDetails(job);
      });

    // const loadData = async () => {
    //   const res = await fetch("/job.json");
    //   const data = await res.json();
    //   //const findData = data.find((dt) => dt._id === id);
    //   setJobDetails(data.find((dt) => dt._id === id));
    // };
    // loadData();
  }, []);

  //const loadData = useLoaderData();
  //apply Now
  const handleAddToCart  = (id) => {
    console.log(id);
    addToDb(id);
    toast(" Job Apply Successfully");
  };

  return (
    <div>
      <h1 className="text-center font-bold my-10 text-3xl">Job Details</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 my-10">
        <div className="text-justify col-span-3">
          <h1>
            <span className="font-bold">Job Description:</span>
            {jobDetails.job_requirements}
          </h1>
          <h1>
            <span className="font-bold">Job Responsibility: </span>
            {jobDetails.job_description}
          </h1>
          <h1 className="font-bold">Educational Requirements:</h1>
          <h1>{jobDetails.education}</h1>
          <h1 className="font-bold">Experiences:</h1>
          <h1>2-3 Years in this field.</h1>
        </div>
        <div className="bg-blue-200 p-3 col-span-1">
          <h1 className="font-bold border-b-2 border-blue-300">Job Details</h1>

          <p>{jobDetails.salary}</p>
          <h1 className="font-bold border-b-2 border-blue-300">
            Contact Information:
          </h1>
          <p>Phone : {jobDetails.phone}</p>
          <p>Email : {jobDetails.email}</p>
          <p>Address : {jobDetails.company_address}</p>
          <button
            onClick={() => handleAddToCart (id)}
            className="w-full p-3 bg-blue-500 rounded-md"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;