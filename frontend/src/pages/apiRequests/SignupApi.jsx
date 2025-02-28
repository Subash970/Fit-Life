import axios from "axios";
import { useState } from "react";

export const SignupApi = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const Signup = async (email, name, password) => {
    if (!email || !name || !password) {
      setMsg("Email , Name and Password are mandatory");
      return;
    }
    setLoading(true);
    setMsg("");

    try {
      const response = await axios.post(`/api/users/signup`, {
        email,
        name,
        password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.user);
      window.location.href = "/";
    } catch (err) {
      setMsg(err.response?.data?.msg || "an error occured. please try again");
    } finally {
      setLoading(false);
    }
  };

  return { loading, msg, Signup };
};
