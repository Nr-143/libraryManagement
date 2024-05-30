  import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layer3 from "./pages/user/Layer3";
import Signup from "./pages/Signup";
import Layer2 from "./pages/user/Layer2";
import About from "./pages/user/About";
import Addbook from "./pages/Admin/Addbook";
import Borrowed from "./pages/Admin/Borrowed";
import Edituser from "./pages/Admin/Edituser";
import Returned from "./pages/Admin/Returned";
import MainDashboard from "./pages/MainDashboard";
import AdminDasboard from "./pages/Admin/AdminDasboard";
import AdmainHome from "./pages/Admin/AdminBooks";
import Login from "./pages/Login";
import HeadLayout from "./HeadLayout";
import UserAvailbooks from "./pages/user/userAvailbooks";
import Adminuser from "./pages/Admin/Adminuser";
import AdminBooks from "./pages/Admin/AdminBooks";
import Adminresource from "./pages/Admin/Adminresource";

import Mainlayout, { loader as mainLoader } from "./pages/Mainlayout";
import TimingContact2 from "./pages/Admin/TimingContact2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeadLayout />,
    children: [
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
                path: "Userbooks",
                element: <UserAvailbooks />,
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
            element: <AdminDasboard />,
            children: [
              {
                index: true,
                element: <Adminuser />,
              },
              {
                path: "admincontact2",
                element: <TimingContact2 />,
              },
              {
                path: "adminresource",
                element: <Adminresource />,
                // action: adminResourceAction,
              },
              {
                path: "adminbooks",
                element: <AdminBooks />,
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
