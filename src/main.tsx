import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Home } from './pages';
import { Contact } from './pages/contact';
import { NavBar } from './components/NavBar';
import { AnimatePresence } from 'framer-motion';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contato/",
    element: <Contact />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AnimatePresence mode='wait'>
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>,
)
