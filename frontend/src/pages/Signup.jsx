import { useState } from "react";
import Loading from "./components/Loading";
import { SignupApi } from "./apiRequests/SignupApi";

const Signup = () => {
  const { loading, msg, Signup } = SignupApi();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    Signup(email, name, password);
  };

  return (
    <>
      <div className="whole-container">
        <div className="container">
          <div className="w-100 d-flex login-container">
            <div className="login ps-5 pe-5 py-3">
              <span className="h3">Sign Up</span>
              <br />
              <span className="text-danger">{msg}</span>

              <form onSubmit={handleForm} className="mt-3">
                <div className="d-flex flex-column">
                  <span className="h6">Email</span>
                  <input
                    type="email"
                    className="rounded-5 py-3 ps-4"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="my-3">
                  <div className="d-flex flex-column">
                    <span className="h6">Name</span>
                    <input
                      className="rounded-5 py-3 ps-4"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="d-flex flex-column mt-4">
                  <span className="h6">Password</span>
                  <input
                    type="password"
                    className="rounded-5 py-3 ps-4"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="text-center mt-5">
                  <button className="btn btn-danger rounded-5 py-3 border-0 w-75 auth-btn">
                    <span className="h6">Sign Up</span>
                  </button>
                </div>
              </form>

              <div className="mobile-auth">
                <div className="line mt-4"></div>

                <div className="mt-4 d-flex flex-column align-items-center">
                  <span>already have an account?</span>
                  <a
                    href="/login"
                    className="btn my-2 rounded-5 px-4 py-2 border auth-btn"
                  >
                    <span className="text-white">Sign In</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="another-side w-50 d-flex justify-content-center align-items-center flex-column">
              <span className="h2 my-3">Welcome to Signup</span>
              <span>already have an account?</span>
              <a
                href="/login"
                className="btn border rounded-5 my-3 py-2 px-4 auth-btn"
              >
                <span className="text-white">Sign In</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </>
  );
};

export default Signup;
