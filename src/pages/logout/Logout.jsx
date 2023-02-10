import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContextProvider";

export default function Logout() {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    window.sessionStorage.removeItem("accessToken");
    window.sessionStorage.removeItem("code");
    window.sessionStorage.removeItem("state");
    window.sessionStorage.removeItem("kakaAccess");
    window.sessionStorage.removeItem("naverAccess");
    setUser(null);
    navigate("/", { replace: true });
  }, [navigate, setUser]);
  return <></>;
}
