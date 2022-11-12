import './App.css';
import React from "react";
import Navbar from './components/navbar/navbar.component';
import Home from './components/home/home.component';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditInfo from './components/edit-info/edit-info.component';

export default function App() {
  console.log("in app");
  const someRef = React.createRef();
  
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