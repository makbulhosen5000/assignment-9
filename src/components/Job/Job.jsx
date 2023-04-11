import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LoadJob from './LoadJob';



const Job = () => {
    const loadData = useLoaderData();
    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-col-2 gap-4 my-10 text-justify">
        {loadData.map(load=><LoadJob load={load} key={load._id} />)}
      </div>
    );
};

export default Job;