import { CChart } from '@coreui/react-chartjs';

import React from 'react';

const Statistics = () => {
    return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-10 items-center justify-center">
        <div className='text-center border-2 rounded-md bg-slate-500 text-lime-50 p-2'>
          <h1>Name: Assignment - 9</h1>
          <h1>Total Mark: 60</h1>
          <h1>Student ID: WEB7-1405</h1>
        </div>
        <div>
          <CChart
            className="w-[75%]"
            type="doughnut"
            data={{
              labels: [
                "Assignment-1",
                "Assignment-2",
                "Assignment-3",
                "Assignment-4",
                "Assignment-5",
                "Assignment-6",
                "Assignment-7",
                "Assignment-8",
              ],
              datasets: [
                {
                  backgroundColor: [
                    "#41B883",
                    "#E46651",
                    "#00D8FF",
                    "#DD1B16",
                    "#FF5733",
                    "#DBFF33",
                    "#75FF33",
                    "#33FF57",
                  ],
                  data: [57, 53, 60, 60, 50, 48, 60, 59],
                },
              ],
            }}
          />
        </div>
      </div>
    );
};

export default Statistics;