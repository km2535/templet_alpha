import React from "react";
import styles from "./KakaoBtn.module.css";

export default function KakaoBtn() {
  const kakaoLoginHandler = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_LOGIN_REST_API}&redirect_uri=${process.env.REACT_APP_API_REDIRECT_URL}&response_type=code`;
  };
  return (
    <div className={styles.kakaobtn} onClick={kakaoLoginHandler}>
      <div className={styles.kakaoLogo}>
        <img src="/images/kakao_login.png" alt="google" />
      </div>
    </div>
  );
}
