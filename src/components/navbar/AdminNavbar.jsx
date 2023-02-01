import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminNavbar.module.css";

export default function AdminNavbar() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div
        className={styles.logo}
        onClick={() => navigate(process.env.REACT_APP_API_ADMIN_URL)}
      >
        <img
          className={styles.img}
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          alt=""
        />
      </div>
      <div className={styles.nav}>
        <ul className={styles.gnb}>
          <li
            className={styles.gnbTitle}
            onClick={() =>
              navigate(process.env.REACT_APP_API_ADMIN_ROOMLIST_URL)
            }
          >
            products
          </li>
          <li
            className={styles.gnbTitle}
            onClick={() =>
              navigate(process.env.REACT_APP_API_ADMIN_SERVICELIST_URL)
            }
          >
            service
          </li>
          <li
            className={styles.gnbTitle}
            onClick={() =>
              navigate(process.env.REACT_APP_API_ADMIN_BOARDLIST_URL)
            }
          >
            notice
          </li>
          <li
            className={styles.gnbTitle}
            onClick={() =>
              navigate(process.env.REACT_APP_API_ADMIN_QNALIST_URL)
            }
          >
            qna
          </li>
        </ul>
      </div>
      <div className={styles.loggin}>
        <div>로그인</div>
      </div>
    </div>
  );
}
