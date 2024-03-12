import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layer3 from "./pages/Layer3";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layer2 from "./pages/Layer2";
import About from "./pages/About";
import Books from "./pages/Books";
import Booktab from "./pages/Booktab";
import Addbook from "./pages/Addbook";
import Borrowed from "./pages/Borrowed";
import Edituser from "./pages/Edituser";
import Returned from "./pages/Returned";
import Mainlayout, { loader as mainLoader } from "./pages/Mainlayout";
import MainDashboard from "./pages/MainDashboard";
import AdminDasboard from "./pages/AdminDasboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    loader: mainLoader,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "maindashboard-user",
        element: <MainDashboard />,
        children: [
          {
            index: true,
            element: <Layer2 />,
          },
          {
            path: "layer3",
            element: <Layer3 />,
          },
          {
            path: "about",
            element: <About />,
          },
        ],
      },
      {
        path: "maindashboard-admin",
        element: <AdminDasboard/>,
        children: [
          {
            path: "books",
            element: <Books />,
          },
          {
            path: "booktab",
            element: <Booktab />,
          },
          {
            path: "Addbook",
            element: <Addbook />,
          },
          {
            path: "borrowed",
            element: <Borrowed />,
          },
          {
            path: "edituser/:id",
            element: <Edituser />,
          },
          {
            path: "Returned",
            element: <Returned />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
