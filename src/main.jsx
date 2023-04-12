import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Job from './components/Job/Job';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound';
import JobDetails from './components/JobDetails/JobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch("job.json"),
      },

      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "job",
        element: <Job />,
        loader: () => fetch("job.json"),
      },
      {
        path: "details/:jobId",
        element: <JobDetails />,
        loader: ({ params }) => params.jobId,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

