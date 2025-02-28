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

    const formData = new FormData();

    formData.append("day", day);

    workouts.map((workout, index) => {
      formData.append(`workouts[${index}][workoutName]`, workout.workoutName);
      formData.append(
        `workouts[${index}][workoutDescription]`,
        workout.workoutDescription
      );
      formData.append(`workouts[${index}][workoutRep]`, workout.workoutRep);
      formData.append(`workoutImg`, workout.workoutImg);
    });

    try {
      const response = await axios.post(
        `/api/admin/addcredential`,
        formData,

        {
          headers: {
            authorization: localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSucessMsg(response.data.msg);
      await WorkoutDayApi();
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
