import React from "react";
import GoogleBtn from "../../ui/login/google/GoogleBtn";
import KakaoBtn from "../../ui/login/kakao/KakaoBtn";
import NaverBtn from "../../ui/login/naver/NaverBtn";

export default function Login() {
  return (
    <div>
      <NaverBtn />
      <KakaoBtn />
      <GoogleBtn />
    </div>
  );
}
