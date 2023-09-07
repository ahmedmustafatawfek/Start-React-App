import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Layouts from "./components/Layouts/Layouts";
import Notfound from "./components/Notfound/Notfound";
import Home from "./components/Home/Home";

let routers = createBrowserRouter([
  {
    path: "",
    element: <Layouts />,
    children: [
      { index: true, element: <Home /> },
      { path:"about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "portfolio", element: <Portfolio /> },

      {path:'*' , element:<Notfound/>}
    ],
  },
]);

function App() {
  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
