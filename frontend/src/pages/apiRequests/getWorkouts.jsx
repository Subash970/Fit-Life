import axios from "axios";
import { useState } from "react";

export const getWorkoutsApi = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [workouts, setWorkouts] = useState([]);

  const getWorkouts = async () => {
    setLoading(true);
    setMsg("");

    try {
      const response = await axios.get("/api/workouts", {
        headers: { authorization: localStorage.getItem("token") },
      });
      setWorkouts(response.data.workouts);
    } catch (err) {
      setMsg(err.response?.data?.msg || "an error occured. please try again");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    msg,
    workouts,
    getWorkouts,
  };
};
