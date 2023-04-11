import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Jobs from './jobs';

const Job = () => {
    const loadData = useLoaderData();
    console.log('loadData--',loadData);
    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-col-2 gap-4 my-10 text-justify">
        {loadData.map((data) => (
          <Jobs data={data} key={data.id} />
        ))}
      </div>
    );
};

export default Job;