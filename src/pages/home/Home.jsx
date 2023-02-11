import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import styles from "./Home.module.css";
export default function Home() {
  return (
    <>
      <Navbar option={{ main: false, sub: true }} />
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  );
}
