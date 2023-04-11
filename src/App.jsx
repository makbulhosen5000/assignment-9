import { useState } from "react";
import JobCategory from "./components/JobCategory/JobCategory";
import Home2 from "./components/Home/Home2";
import { useLoaderData } from "react-router-dom";
import FeaturedJob from "./components/FeaturedJob/FeaturedJob";
import { blogData } from "../public/data";


function App() {

  const [seeMore, setSeeMore] = useState(false);
  const loadData = useLoaderData();

  const handleSeeMore = () => {
    setSeeMore(true);
  };

  return (
    <div>
      <Home2 />
      <JobCategory />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-col-2 gap-4 my-10 text-justify">
        {seeMore
          ? loadData.map((data) => <FeaturedJob data={data} key={data._id} />)
          : loadData
              .slice(0, 4)
              .map((data) => <FeaturedJob data={data} key={data._id} />)}
      </div>
      <div className="text-center">
        {!seeMore && (
          <button
            type="button"
            onClick={handleSeeMore}
            className="bg-green-600 p-2 rounded my-5"
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
