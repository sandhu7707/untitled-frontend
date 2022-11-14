import './App.css';
import React from "react";
import Navbar from './components/navbar/navbar.component';
import Home from './components/home/home.component';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditInfo from './components/edit-profile/edit-profile.component';

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/edit-info",
      element: <EditInfo/>
    }
  ])

  return (
    // <ToDoList/>
    <div className="App">
      <Navbar/>
      <RouterProvider router={router}/>
    </div>
  );
}