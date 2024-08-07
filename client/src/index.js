import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ceateBrowseRouter,createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './views/Home/Home';
import Signup from './views/Signup/Signup.js';
import Login from './views/Login/Login.js';



const root =  ReactDOM.createRoot(document.getElementById("root"))

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/signup",
        element:<Signup/>
    },
    {
        path:"/login",
        element:< Login/>
    },

])

root.render(<div>
<RouterProvider router={router}/>

</div>)
