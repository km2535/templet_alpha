import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Navbar option={{ main: false, sub: true }} />
      <div>
        <Outlet />
      </div>
    </>
  );
}