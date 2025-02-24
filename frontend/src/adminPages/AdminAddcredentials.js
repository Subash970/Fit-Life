import workout from "../static/images/workout.jpg";
import workout2 from "../static/images/workout-2.jpg";

const AddCredentials = () => {
  return (
    <>
      <div className="container pt-5">
        <h2>Add Credentials of user's workout</h2>
        <form className="mt-5">
          <input
            className="form-control ps-4 py-3"
            placeholder="Day of the workout plan"
            disabled
            value="3"
          />

          <h3 className="mt-5">Workout plans</h3>
          <div className="mt-5 d-flex flex-column gap-4">
            <input
              className="form-control py-3 ps-4"
              placeholder="Workout name"
            />
            <input
              className="form-control py-3 ps-4"
              placeholder="Workout Description"
            />
            <input className="form-control py-3 ps-4" placeholder="Rep" />
            <input
              type="file"
              accept=".jpg , .png , .jpeg"
              className="visually-hidden"
              id="workout_img"
            />

            <label htmlFor="workout_img">
              <div className="btn btn-secondary py-2">Choose an Image</div>
            </label>
            <div className="input-images d-flex gap-3">
              <img src={workout} alt="img-1" className="rounded" />
              <img src={workout2} alt="img-1" className="rounded" />
            </div>
            <button className="btn btn-primary w-25 py-2">Add Workout</button>
          </div>
          <div className="mt-5">
            <h3>Workout's</h3>
            <table className="mt-5">
              <tbody>
                <tr>
                  <td>Workout </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCredentials;
