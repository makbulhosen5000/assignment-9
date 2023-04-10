import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const loadData = useLoaderData();
    console.log("data--",loadData);
    
    //apply Now
    const applyNow = () =>{
        
    }

    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 my-10">
        <div className="text-justify col-span-3">
          <h1>
            <span className="font-bold"> Job Description:</span> A UI/UX (User
            Interface/User Experience) designer is responsible for designing and
            creating engaging and effective interfaces for software and web
            applications. This includes designing the layout, visual design, and
            interactivity of the user interface.
          </h1>
          <h1>
            <span className="font-bold">Job Responsibility: </span>
            Collaborating with cross-functional teams: UI/UX designers often
            work closely with other teams, including product management,
            engineering, and marketing, to ensure that the user interface is
            aligned with business and technical requirements. You will need to
            be able to effectively communicate your design ideas and gather
            feedback from other team members.
          </h1>
          <h1 className="font-bold">Educational Requirements:</h1>
          <h1>Bachelor degree to complete any reputational university.</h1>
          <h1 className="font-bold">Experiences:</h1>
          <h1>2-3 Years in this field.</h1>
        </div>
        <div className="bg-blue-200 p-3 col-span-1">
          <h1 className="font-bold border-b-2 border-blue-300">Job Details</h1>

          <p>Salary: 100K - 150K (Per Month)</p>
          <p>Job Title : Product Designer</p>
          <h1 className="font-bold border-b-2 border-blue-300">Contact Information:</h1>
          <p>Phone : 01750-00 00 00</p>
          <p>Email : info@gmail.com</p>
          <p>Address : Dhanmondi 32, Sukrabad Dhaka, Bangladesh</p>
          <button onClick={applyNow} className="w-full p-3 bg-blue-500 rounded-md">
            Apply Now
          </button>
        </div>
      </div>
    );
};

export default JobDetails;