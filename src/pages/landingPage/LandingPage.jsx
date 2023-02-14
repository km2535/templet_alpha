import React from "react";
import Navbar from "../../components/navbar/Navbar";
import LandBanner from "./landBanner/LandBanner";
import styles from "./LandingPage.module.css";
import LandIntro from "./landIntro/LandIntro";
import LandProvide from "./landProvide/LandProvide";
export default function LandingPage() {
  return (
    <div id="landingpage">
      <Navbar option={{ main: true, sub: false }} />
      <section className={styles.section}>
        <LandBanner />
      </section>
      <section className={styles.section}>
        <LandIntro />
      </section>
      <section>
        <LandProvide />
      </section>
    </div>
  );
}
