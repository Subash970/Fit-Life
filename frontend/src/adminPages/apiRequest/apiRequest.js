import axios from "axios";
import { useState } from "react";

export const AdminApiRequest = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const WorkoutApi = async (day, workouts) => {
    setLoading(true);
    setMsg("");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/admin/addcredential`,
        { day, workouts },
        { headers: { authorization: localStorage.getItem("token") } }
      );
      setMsg(response.data.msg);
    } catch (err) {
      setMsg(err.response?.data?.msg || "an error occured. please try again");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    msg,
    WorkoutApi,
  };
};
