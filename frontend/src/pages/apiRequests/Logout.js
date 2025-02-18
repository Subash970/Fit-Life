const Logout = () => {
  const logoutHandler = () => {
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div className="logout-screen">
        <div className="logout-popup border border-3 rounded-5 p-4 d-flex flex-column justify-content-center">
          <span className="h2 py-2 text-white">Logout</span>
          <div>
            <span className="h6 text-white">
              are you sure, do you wanna Logout..?
            </span>

            <div className="mt-5 d-flex justify-content-end gap-4">
              <a href="/" className="btn btn-secondary rounded-5">
                Cancel
              </a>
              <button
                onClick={logoutHandler}
                className="btn btn-danger rounded-5"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
