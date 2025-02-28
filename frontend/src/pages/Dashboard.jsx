import { useState } from "react";
import Image from "../static/images/gym.jpg";

const Dashboard = () => {
  const [soldier, setSoldier] = useState("Soldier");

  const [rep, setRep] = useState(5);

  return (
    <>
      <div className="container pt-5">
        <div>
          <p className="h1 text-center">Welcome {soldier}!</p>
        </div>

        <div className="workout_detail_container container mt-5">
          <div className="row py-5">
            <div className="col-12 col-lg-6">
              <img
                src={Image}
                alt="workout"
                className="w-100 h-100 rounded"
                style={{ backgroundSize: "cover", height: "350px" }}
              />
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center flex-column gap-4 dashboard-text rounded">
              <p className="h3 fw-bolder">Workout Name</p>
              <p className="px-5">
                A good workout balances strength, endurance, and flexibility.
                Start with a warm-up to prepare your muscles and prevent
                injuries. Incorporate a mix of cardio, strength training, and
                core exercises. Focus on proper form and gradually increase
                intensity for better results. End with a cool-down and
                stretching to aid recovery and reduce soreness.
              </p>
              <p className="fw-bolder">Rep : {rep}</p>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center flex-column gap-4 dashboard-text rounded">
              <p className="h3 fw-bolder">Workout Name</p>
              <p className="px-5">
                A good workout balances strength, endurance, and flexibility.
                Start with a warm-up to prepare your muscles and prevent
                injuries. Incorporate a mix of cardio, strength training, and
                core exercises. Focus on proper form and gradually increase
                intensity for better results. End with a cool-down and
                stretching to aid recovery and reduce soreness.
              </p>
              <p className="fw-bolder">Rep : {rep}</p>
            </div>

            <div className="col-12 col-lg-6">
              <img
                src={Image}
                alt="workout"
                className="w-100 h-100 rounded"
                style={{ backgroundSize: "cover", height: "350px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
