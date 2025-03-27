import { useEffect, useState } from "react";
import { AdminApiRequest } from "./apiRequest/apiRequest";
import Loading from "../pages/components/Loading";

const AddCredentials = () => {
  const { loading, msg, WorkoutApi, WorkoutDayApi, workoutDay, sucessMsg } =
    AdminApiRequest();

  const [workouts, setWorkouts] = useState([]);

  const [day, setDay] = useState("");
  const [workoutName, setWorkoutName] = useState("");
  const [workoutDescription, setWorkoutDescription] = useState("");
  const [workoutRep, setWorkoutRep] = useState("");
  const [workoutSet, setWorkoutSet] = useState("");
  const [workoutImg, setWorkoutImg] = useState("");
  const [previewImg, setPreviewImg] = useState(null);

  const handleImg = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return console.log("Please add an Image");
    }

    setPreviewImg(URL.createObjectURL(file));
    setWorkoutImg(file);
  };

  const clearForm = () => {
    setWorkoutName("");
    setWorkoutDescription("");
    setWorkoutRep("");
    setWorkoutImg("");
    setWorkoutSet("");
  };

  const handleAddWorkout = () => {
    if (
      !workoutName ||
      !workoutDescription ||
      !workoutRep ||
      !workoutImg ||
      !workoutSet
    ) {
      alert("add the data to the input's");
    } else {
      const newWorkout = {
        workoutName,
        workoutDescription,
        workoutRep,
        workoutImg,
        previewImg,
        workoutSet,
      };

      setWorkouts([...workouts, newWorkout]);
      clearForm();
    }
  };

  //api request

  const handleFormSubmit = (e) => {
    e.preventDefault();
    WorkoutApi(day, workouts);
    clearForm();
    setWorkouts([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //api request

  const [isChecked, setIsChecked] = useState(false);
  const [disabledInput, setDisabledInput] = useState(true);

  const handleCheckboxChange = () => {
    if (!isChecked) {
      setIsChecked(true);
      setDisabledInput(false);
    } else {
      setIsChecked(false);
      setDisabledInput(true);
    }
  };

  //day of the workout retrival
  useEffect(() => {
    WorkoutDayApi();
  }, []);

  useEffect(() => {
    if (workoutDay) setDay(workoutDay);
  }, [workoutDay]);

  const handleWorkoutRemove = (index) => {
    setWorkouts((prevWorkouts) => prevWorkouts.filter((_, i) => i !== index));
  };

  return (
    <div className="container py-5">
      <h2>Add Credentials of User's Workout</h2>
      <p className="my-5 text-danger">{msg}</p>
      <p className="my-5 text-success">{sucessMsg}</p>
      <form className="mt-5" onSubmit={handleFormSubmit}>
        <div>
          <input
            className="form-control ps-4 py-3"
            placeholder="Day of the workout plan"
            type="number"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            disabled={disabledInput}
          />
          <div className="d-flex align-items-center ps-4 pt-4 gap-2">
            <input
              type="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox">Edit Day of the Workout</label>
          </div>
        </div>

        <h3 className="mt-5">Workout Plans</h3>
        <div className="mt-5 d-flex flex-column gap-4">
          <input
            className="form-control py-3 ps-4"
            placeholder="Workout name"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
          />
          <input
            className="form-control py-3 ps-4"
            placeholder="Workout Description"
            value={workoutDescription}
            onChange={(e) => setWorkoutDescription(e.target.value)}
          />
          <input
            className="form-control py-3 ps-4"
            placeholder="Rep"
            type="number"
            value={workoutRep}
            onChange={(e) => setWorkoutRep(e.target.value)}
          />
          <input
            className="form-control py-3 ps-4"
            placeholder="Set"
            type="number"
            value={workoutSet}
            onChange={(e) => setWorkoutSet(e.target.value)}
          />
          <div>
            <input
              type="file"
              accept=".jpg,.png,.jpeg"
              className="visually-hidden"
              id="workout_img"
              onChange={handleImg}
            />

            <label htmlFor="workout_img">
              <div className="btn btn-secondary py-2">Choose an Image</div>
            </label>
            <div className="mt-3">
              {workoutImg && (
                <img
                  src={previewImg}
                  alt="workout_img"
                  className="workout_img rounded"
                />
              )}
            </div>
          </div>
          <div className="input-images d-flex gap-3"></div>
          <p onClick={handleAddWorkout} className="btn btn-secondary w-25 py-2">
            Add Workout
          </p>
        </div>

        {workouts.length > 0 && (
          <div className="my-5">
            <h3>Workout List</h3>
            <table className="table mt-3 rounded">
              <thead>
                <tr>
                  <td>Workout Name</td>
                  <td>Rep</td>
                  <td>Workout Description</td>
                  <td>Image</td>
                  <td>Remove Workout</td>
                </tr>
              </thead>
              <tbody>
                {workouts.map((workout, index) => (
                  <tr key={index}>
                    <td>{workout.workoutName}</td>
                    <td>{workout.workoutRep}</td>
                    <td>{workout.workoutDescription}</td>
                    <td>
                      {workout.workoutImg && (
                        <img
                          src={workout.previewImg}
                          alt="Workout"
                          width="100"
                        />
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleWorkoutRemove(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="my-5">
          <button className="btn btn-primary w-50">Submit Workout Plan</button>
        </div>
      </form>
      {loading && <Loading />}
    </div>
  );
};

export default AddCredentials;
