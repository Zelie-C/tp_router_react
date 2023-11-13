import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import './index.css'
import About from './About';
import Connexion from './Connexion';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/connexion',
      element: <Connexion />
    }
  ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
