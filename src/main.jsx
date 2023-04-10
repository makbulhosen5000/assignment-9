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
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch("job.json"),
      },
      {
        path: "details/:jobId",
        element: <JobDetails />,
        loader: ({ params }) =>fetch(`https://jsonplaceholder.typicode.com/posts/${params.jobId}`),
        //loader: ({ params }) => fetch(`job.json/${params.jobId}`),
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "job",
        element: <Job />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

