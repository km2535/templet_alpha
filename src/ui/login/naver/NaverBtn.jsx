import React from "react";
import styles from "./NaverBtn.module.css";
export default function NaverBtn() {
  const kakaoLoginHandler = () => {
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?client_id=${
      process.env.REACT_APP_NAVER_CLIENT_ID_API
    }&redirect_uri=${
      process.env.REACT_APP_API_REDIRECT_URL
    }&state=${"templet_alpha"}&response_type=code`;
  };
  return (
    <div className={styles.naverbtn} onClick={kakaoLoginHandler}>
      <div className={styles.naverLogo}>
        <img src="/images/naver.png" alt="google" />
      </div>
    </div>
  );
}
