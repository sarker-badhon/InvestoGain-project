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
import Plan from './components/pages/Plan/Plan.jsx';
import Contacts from './components/pages/Home/Contacts/Contacts.jsx';
import BlogPost from './components/pages/Home/BlogPost/BlogPost.jsx';
import FAQ from './components/pages/Home/FAQ/FAQ.jsx';


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
      {
        path:"/plan",
        element:<Plan></Plan>
      },
      {
        path:"/contacts",
        element:<Contacts></Contacts>
      },
      {
        path:"/blogPost",
        element:<BlogPost></BlogPost>
      },
      {
        path:"/faq",
        element:<FAQ></FAQ>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
