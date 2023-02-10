export const naverLogin = async (code, state) => {
  await fetch(
    `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID_API}&client_secret=${process.env.REACT_APP_NAVER_CLIENT_SECRET_API}&redirect_uri=${process.env.REACT_APP_API_REDIRECT_URL}&code=${code}&state=${state}`,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) =>
      window.sessionStorage.setItem("naverAccess", data?.access_token)
    );
};

export const naverLog = (naverAccess, setUser) => {
  const formData = new FormData();
  formData.append("token", naverAccess);

  fetch("https://kangmin.shop/service/src/login/naver/naverLogin.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) =>
      setUser({
        ID: data.response?.id,
        USER_EMAIL: data?.response?.email || "",
        NAME: data?.response?.name || "",
        PROFILE: data?.response?.profile_image || "",
        IsAdmin: false,
      })
    )
    .catch((err) => console.log(err));
};
