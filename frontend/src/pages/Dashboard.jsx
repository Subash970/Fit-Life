import Loading from "./components/Loading";
import { getWorkoutsApi } from "./apiRequests/getWorkouts";
import { useEffect } from "react";

const Dashboard = () => {
  const { getWorkouts, loading, msg, workouts } = getWorkoutsApi();

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <>
      <div className="container pt-5">
        <div>
          <p className="my-5 text-danger">{msg}</p>

          {workouts?.day && (
            <p className="h3 text-center">Day {workouts.day} Workout plans</p>
          )}
        </div>

        <div className="workout_detail_container container mt-5">
          {workouts?.workouts?.length > 0 &&
            workouts.workouts.map((workout, i) => (
              <div className="row py-5" key={i}>
                {i % 2 == 0 ? (
                  <>
                    <div className="col-12 col-lg-6">
                      <img
                        src={import.meta.env.VITE_APP_API + workout.workoutImg}
                        alt="workout"
                        className="w-100 h-100 rounded"
                        style={{ backgroundSize: "cover", height: "350px" }}
                      />
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center flex-column gap-4 dashboard-text rounded">
                      <p className="h3 fw-bolder">{workout.workoutName}</p>
                      <p className="px-5">{workout.workoutDescription}</p>
                      <p className="fw-bolder">Rep : {workout.workoutRep}</p>
                      <p className="fw-bolder">Set : {workout.workoutSet}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center flex-column gap-4 dashboard-text rounded">
                      <p className="h3 fw-bolder">{workout.workoutName}</p>
                      <p className="px-5">{workout.workoutDescription}</p>
                      <p className="fw-bolder">Rep : {workout.workoutRep}</p>
                      <p className="fw-bolder">Set : {workout.workoutSet}</p>
                    </div>
                    <div className="col-12 col-lg-6">
                      <img
                        src={import.meta.env.VITE_APP_API + workout.workoutImg}
                        alt="workout"
                        className="w-100 h-100 rounded"
                        style={{ backgroundSize: "cover", height: "350px" }}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
        </div>
      </div>

      {loading && <Loading />}
    </>
  );
};

export default Dashboard;
