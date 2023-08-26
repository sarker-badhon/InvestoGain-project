import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/LayOut/Main.jsx';
import Home from './components/pages/Home/Home/Home.jsx';
import About from './components/pages/About/About.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main> ,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About></About>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
