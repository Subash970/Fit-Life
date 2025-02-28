import FitLife from "../../static/images/fit-life.png";
import { useEffect, useState } from "react";
import { LogoutApi } from "../apiRequests/Logout";

function Nav() {
  const user = localStorage.getItem("user");
  const { Logout } = LogoutApi();
  const [logoutPopup, setLogoutPopup] = useState(false);

  const handleLogoutpopup = () => {
    setLogoutPopup(true);
  };

  const navItems = [
    { title: "Home", icon: "fas fa-house", link: "/" },
    { title: "About", icon: "fas fa-building", link: "/about" },
    user && {
      title: "Dashboard",
      icon: "far fa-calendar-days",
      link: "/dashboard",
    },
    !user && { title: "Login", icon: "fas fa-user", link: "/login" },
  ].filter(Boolean);

  const [nav, setNav] = useState(() =>
    window.innerWidth < 992 ? false : true
  );

  const handleResize = () => {
    if (window.innerWidth < 992) {
      setNav(false);
    } else {
      setNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="w-100 text-white d-flex align-items-center">
        <a
          href="/"
          className="d-flex align-items-center justify-content-center text-white"
        >
          <img src={FitLife} alt="Fit Life Logo" className="fit-life-logo" />
          <span className="h2 mt-1 ps-2 title">Fit Life</span>
        </a>

        {nav && (
          <div className="h-100 ms-auto d-flex align-items-center">
            <ul className="list-unstyled gap-3 mt-3 d-flex">
              {navItems.map((nav, i) => (
                <li key={i}>
                  <a href={nav.link}>{nav.title}</a>
                </li>
              ))}
              {user && (
                <li>
                  <span className="cursor logout" onClick={handleLogoutpopup}>
                    Logout
                  </span>
                </li>
              )}
            </ul>
          </div>
        )}

        {!nav && (
          <div className="mobile-navbar w-100">
            <ul className="w-100 h-100 list-unstyled d-flex align-items-center justify-content-evenly">
              {navItems.map((navItem, i) => (
                <li key={i}>
                  <a href={navItem.link}>
                    <i className={navItem.icon} title={navItem.title}></i>
                  </a>
                </li>
              ))}
              {user && (
                <li>
                  <i
                    className="fa-solid fa-arrow-right-from-bracket logout-icon"
                    onClick={handleLogoutpopup}
                  ></i>
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>

      {logoutPopup && (
        <div className="logout-screen">
          <div className="logout-popup rounded p-3 d-flex flex-column">
            <p className="py-2 h3">Logout..?</p>
            <p>are you sure, do you wanna Logout..?</p>
            <div className="d-flex justify-content-end gap-3 mt-5">
              <button
                className="btn btn-secondary rounded-5 px-3"
                onClick={() => {
                  setLogoutPopup(false);
                }}
              >
                Close
              </button>
              <button
                className="btn btn-danger rounded-5 px-3"
                onClick={Logout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
