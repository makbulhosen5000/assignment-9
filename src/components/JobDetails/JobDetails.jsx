
import { useLoaderData} from 'react-router-dom';
import toast from "react-hot-toast";


const JobDetails = () => {
    const loadData = useLoaderData();
    //apply Now
    const applyNow = (loadData) => {
      localStorage.setItem(JSON.stringify(loadData), loadData.id);
      toast("Save Successfully");
    };

    return (
      <div>
        <h1 className="text-center font-bold my-10 text-3xl">Job Details</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 my-10">
          <div className="text-justify col-span-3">
          
            <h1>
              <span className="font-bold">Job Description:</span> A UI/UX (User
              Interface/User Experience) designer is responsible for designing
              and creating engaging and effective interfaces for software and
              web applications. This includes designing the layout, visual
              design, and interactivity of the user interface.
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
            <h1 className="font-bold border-b-2 border-blue-300">
              Job Details
            </h1>

            <p>Salary: 100K - 150K (Per Month)</p>
            <p>Job Title : sdf</p>
            <h1 className="font-bold border-b-2 border-blue-300">
              Contact Information:
            </h1>
            <p>Phone : 01750-00 00 00</p>
            <p>Email : info@gmail.com</p>
            <p>Address : Dhanmondi 32, Sukrabad Dhaka, Bangladesh</p>
            <button
              onClick={() => applyNow(loadData)}
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