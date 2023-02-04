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
import AdminBoardList from "./adminpage/board/boardlist/AdminBoardList";
import AddBoard from "./adminpage/board/addboard/AddBoard";
import AdminBoardEdit from "./adminpage/board/boardedit/AdminBoardEdit";
import BoardDetail from "./components/board/boardDetail/BoardDetail";
import AdminQnaList from "./adminpage/qna/qnaList/AdminQnaList";
import AddQna from "./adminpage/qna/addQna/AddQna";
import AdminQnaEdit from "./adminpage/qna/qnaEdit/AdminQnaEdit";
import QnaDetail from "./components/qna/qnaDetail/QnaDetail";

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
            children: [
              {
                path: process.env.REACT_APP_API_BOARD_DETAIL_URL + "/:id",
                element: <BoardDetail />,
              },
            ],
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
          {
            path: process.env.REACT_APP_API_ADMIN_BOARDLIST_URL,
            element: <AdminBoardList />,
          },

          {
            path: process.env.REACT_APP_API_ADMIN_ADDBOARD_URL,
            element: <AddBoard />,
          },
          {
            path:
              process.env.REACT_APP_API_ADMIN_BOARDLIST_URL +
              "/" +
              process.env.REACT_APP_API_BOARD_DETAIL_URL +
              "/:id",
            //admin 여부 확인하여 경로 보호하기
            element: <BoardDetail isAdmin={true} />,
          },
          {
            path: process.env.REACT_APP_API_ADMIN_BOARDEDIT_URL + "/:id",
            element: <AdminBoardEdit />,
          },
          {
            path: process.env.REACT_APP_API_ADMIN_QNALIST_URL,
            element: <AdminQnaList />,
          },

          {
            path: process.env.REACT_APP_API_ADMIN_ADDQNA_URL,
            element: <AddQna />,
          },
          {
            path:
              process.env.REACT_APP_API_ADMIN_QNALIST_URL +
              "/" +
              process.env.REACT_APP_API_QNA_DETAIL_URL +
              "/:id",
            //admin 여부 확인하여 경로 보호하기
            element: <QnaDetail isAdmin={true} />,
          },
          {
            path: process.env.REACT_APP_API_ADMIN_QNAEDIT_URL + "/:id",
            element: <AdminQnaEdit />,
          },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
