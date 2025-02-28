import axios from "axios";
import { useState } from "react";

export const LoginApi = () => {

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const Login = async (email, password) => {
    if (!email || !password) {
      setMsg("Email and Password are mandatory");
    }
    setLoading(true);

    try {
      const response = await axios.post(`/api/users/login`, {
        email,
        password,
      });
      localStorage.setItem("user", response.data.user);
      localStorage.setItem("token", response.data.token);
      window.location.href = "/";
    } catch (err) {
      setMsg(err.response?.data?.msg || "an error occured. please try again");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    msg,
    Login,
  };
};
