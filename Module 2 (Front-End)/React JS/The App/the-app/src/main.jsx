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
import Props from './Pages/Props';

// Pages 2 (Class Component)
import Home2 from './Pages/Home2';
import Profile2 from './Pages/Profile2';
import Hooks from './Pages/Hooks/Index.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      // {
      //   path: "/",
      //   element: <Home />
      // },
      {
        path: "/",
        element: <Home2 />
      },
      {
        path: '/profile2',
        element: <Profile2 />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/props",
        element: <Props />
      },
      {
        path: "/hooks",
        element: <Hooks />
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
