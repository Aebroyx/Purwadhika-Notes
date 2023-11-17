import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Support/Stylesheets/Utils.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Components
//import Navbar from './Components/Navbar';

// Pages
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Props from './Pages/Props'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/props",
        element: <Props />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
