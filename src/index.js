import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/errorPage/ErrorPage";
import LandingPage from "./pages/landingPage/LandingPage";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Location from "./pages/location/Location";
import RoomList from "./pages/roomlist/RoomList";
import Service from "./pages/service/Service";
import Notice from "./pages/notice/Notice";
import Qna from "./pages/qna/Qna";
import Admin from "./adminpage/Admin";
import AdminRoomList from "./adminpage/room/roomlist/AdminRoomList";
import AdminRoomEdit from "./adminpage/room/roomedit/AdminRoomEdit";
import Summary from "./adminpage/summary/Summary";
import AddRoom from "./adminpage/room/addroom/AddRoom";
import AdminServiceList from "./adminpage/service/servicelist/AdminServiceList";
import AddService from "./adminpage/service/addservice/AddService";
import AdminServiceEdit from "./adminpage/service/serviceedit/AdminServiceEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <LandingPage />,
      },
      {
        path: process.env.REACT_APP_API_SUB_URL,
        element: <Home />,
        children: [
          {
            index: true,
            path: process.env.REACT_APP_API_SUB_URL,
            element: <About />,
          },
          {
            path: process.env.REACT_APP_API_SUB_OPTION_ONE_URL,
            element: <Location />,
          },
          {
            path: process.env.REACT_APP_API_SUB_OPTION_TWO_URL,
            element: <RoomList />,
          },
          {
            path: process.env.REACT_APP_API_SUB_OPTION_THREE_URL,
            element: <Service />,
          },
          {
            path: process.env.REACT_APP_API_SUB_OPTION_FOUR_URL,
            element: <Notice />,
          },
          {
            path: process.env.REACT_APP_API_SUB_OPTION_FIVE_URL,
            element: <Qna />,
          },
        ],
      },
      {
        path: process.env.REACT_APP_API_ADMIN_URL,
        element: <Admin />,
        children: [
          {
            index: true,
            path: process.env.REACT_APP_API_ADMIN_URL,
            element: <Summary />,
          },
          {
            path: process.env.REACT_APP_API_ADMIN_ROOMLIST_URL,
            element: <AdminRoomList />,
          },

          {
            path: process.env.REACT_APP_API_ADMIN_ADDROOM_URL,
            element: <AddRoom />,
          },
          {
            path: process.env.REACT_APP_API_ADMIN_ROOMEDIT_URL + "/:id",
            element: <AdminRoomEdit />,
          },
          {
            path: process.env.REACT_APP_API_ADMIN_SERVICELIST_URL,
            element: <AdminServiceList />,
          },

          {
            path: process.env.REACT_APP_API_ADMIN_ADDSERVICE_URL,
            element: <AddService />,
          },
          {
            path: process.env.REACT_APP_API_ADMIN_SERVICEDIT_URL + "/:id",
            element: <AdminServiceEdit />,
          },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);