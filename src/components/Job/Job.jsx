
import { useLoaderData } from 'react-router-dom';
import LoadJob from './LoadJob';
import { getStoredCart } from '../../../utilitis/fakeDB';
import { useEffect, useState } from 'react';


const Job = () => {
  const loadData = useLoaderData();

  return (
    <div>
      <div className="flex justify-between my-10">
        <h1 className="text-3xl">Applied Jobs</h1>

        <div>
          <div className="relative inline-flex self-center">
            <svg
              className="text-white bg-purple-700 absolute top-0 right-0 m-2 pointer-events-none p-2 rounded"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="40px"
              height="40px"
              viewBox="0 0 38 22"
              version="1.1"
            >
              <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
              <g
                id="ZahnhelferDE—Design"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="ZahnhelferDE–Icon&amp;Asset-Download"
                  transform="translate(-539.000000, -199.000000)"
                  fill="#ffffff"
                  fill-rule="nonzero"
                >
                  <g
                    id="Icon-/-ArrowRight-Copy-2"
                    transform="translate(538.000000, 183.521208)"
                  >
                    <polygon
                      id="Path-Copy"
                      transform="translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) "
                      points="33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <select  className="text-2xl font-bold rounded border-2 border-purple-700 text-gray-600 h-14 w-60 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <option value="Full Time">Full-Time</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-col-2 gap-4 text-justify">
        {loadData.map((load) => (
          <LoadJob load={load} key={load._id} />
        ))}
      </div>
    </div>
  );
};

export default Job;