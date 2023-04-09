import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './components/Home.jsx/Home';
import Statistics from './components/Statistics/Statistics';
import Job from './components/Job/Job';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <App />,
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
        element: <NotFound/>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

