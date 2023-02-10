import React from "react";
import AccessLogin from "../../components/login/google/AccessLogin";
import Navbar from "../../components/navbar/Navbar";
import styles from "./LandingPage.module.css";
export default function LandingPage() {
  return (
    <div id="landingpage">
      <AccessLogin />
      <Navbar option={{ main: true, sub: false }} />
      <section className={styles.section}>
        <div className={styles.banner}></div>
      </section>
    </div>
  );
}
