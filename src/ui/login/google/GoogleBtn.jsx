import React from "react";
import styles from "./GoogleBtn.module.css";

export default function GoogleBtn() {
  const googleLoginHandler = () => {
    window.location.href =
      "https://accounts.google.com/o/oauth2/auth?" +
      `client_id=${process.env.REACT_APP_API_GOOGLE_CLIENT_ID}&` +
      `redirect_uri=${process.env.REACT_APP_API_REDIRECT_URL}&` +
      "response_type=token&" +
      "scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";
  };
  return (
    <div className={styles.googlebtn} onClick={googleLoginHandler}>
      <div className={styles.googleLogo}>
        <img src="/images/google.png" alt="google" />
      </div>
    </div>
  );
}