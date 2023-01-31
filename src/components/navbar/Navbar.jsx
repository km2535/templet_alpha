import React from "react";
import { useNavigate } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import styles from "./Navbar.module.css";
import { useState } from "react";
import SideNavbar from "./SideNavbar";

export default function Navbar({ option }) {
  const { main, sub } = option;
  const [side, setSide] = useState(false);
  const navigate = useNavigate();
  const toggleHandler = () => {
    setSide((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      <BiMenuAltLeft
        onClick={toggleHandler}
        className={sub ? styles.menuDark : styles.menu}
      />
      <SideNavbar setSide={setSide} side={side} />
      {main && (
        <div className={styles.logo}>
          <div className={styles.logoContainer} onClick={() => navigate("/")}>
            <img
              className={styles.img}
              src={process.env.PUBLIC_URL + "/images/logo_white.png"}
              alt=""
            />
          </div>
        </div>
      )}
      {sub && (
        <div className={styles.navbar}>
          <li
            id="option1"
            className={styles.option1}
            onClick={() => navigate(process.env.REACT_APP_API_SUB_URL)}
          >
            about
          </li>
          <li
            id="option2"
            className={styles.option2}
            onClick={() =>
              navigate(process.env.REACT_APP_API_SUB_OPTION_ONE_URL)
            }
          >
            location
          </li>
          <li
            id="option3"
            className={styles.option3}
            onClick={() =>
              navigate(process.env.REACT_APP_API_SUB_OPTION_TWO_URL)
            }
          >
            room
          </li>
          <li
            id="option4"
            className={styles.option4}
            onClick={() =>
              navigate(process.env.REACT_APP_API_SUB_OPTION_THREE_URL)
            }
          >
            service
          </li>
          <li
            id="option5"
            className={styles.option5}
            onClick={() =>
              navigate(process.env.REACT_APP_API_SUB_OPTION_FOUR_URL)
            }
          >
            notice
          </li>
          <li
            id="option6"
            className={styles.option6}
            onClick={() =>
              navigate(process.env.REACT_APP_API_SUB_OPTION_FIVE_URL)
            }
          >
            qna
          </li>
        </div>
      )}
      <div className={sub ? styles.logginDark : styles.loggin}>
        <div>로그인</div>
      </div>
    </div>
  );
}
