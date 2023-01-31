import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/navbar/AdminNavbar";

export default function Admin() {
  // 여기에 경로를 보호하는 로직을 추가해야함.
  return (
    <div>
      <AdminNavbar />
      <Outlet />
    </div>
  );
}
