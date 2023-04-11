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
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch("job.json"),
      },

      {
        path: "details/:jobId",
        element: <JobDetails />,
        loader: ({ params }) =>
        fetch(`job.json/${params.jobId}`).then((response) => response.json()),
        loader: ({ params }) => fetch(`job.json/${params.jobId}`),
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
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

