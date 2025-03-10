import axios from "axios";
import { useState } from "react";

export const AdminApiRequest = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [sucessMsg, setSucessMsg] = useState("");
  const [workoutDay, setWorkoutDay] = useState(null);

  //workout plan add api
  const WorkoutApi = async (day, workouts) => {
    setLoading(true);
    setMsg("");
    setSucessMsg("");

    try {
      const formData = new FormData();

      formData.append("day", day);

      workouts.forEach((workout, i) => {
        formData.append(`workoutNames`, workout.workoutName);
        formData.append(`workoutDescriptions`, workout.workoutDescription);
        formData.append(`workoutReps`, workout.workoutRep);
        formData.append(`workoutSets`, workout.workoutSet);
        formData.append(`files`, workout.workoutImg);
      });

      const response = await axios.post("/api/admin/addcredential", formData, {
        headers: { authorization: localStorage.getItem("token") },
      });
      setSucessMsg(response.data.msg);
    } catch (err) {
      setMsg(err.response?.data?.msg || "an error occured. please try again");
    } finally {
      setLoading(false);
    }
  };

  //workout day retrival api
  const WorkoutDayApi = async () => {
    setMsg("");
    setLoading(true);
    try {
      const response = await axios.get(`/api/admin/day`, {
        headers: { authorization: localStorage.getItem("token") },
      });
      setWorkoutDay(response.data.workoutDay);
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
    WorkoutDayApi,
    workoutDay,
    sucessMsg,
  };
};
