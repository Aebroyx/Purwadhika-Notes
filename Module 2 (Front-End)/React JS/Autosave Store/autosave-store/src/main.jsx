import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Pages
import Home from './Pages/Home/Index.jsx'
import Product from './Pages/Product/Index.jsx';
import DetailProduct from './Pages/DetailProduct/Index.jsx';

const router = createBrowserRouter([
  { 
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/product",
        element: <Product />
      },
      {
        path: "/detail-product/:id",
        element: <DetailProduct />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
