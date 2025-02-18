import FitLife from "../../static/images/fit-life.png";
import { useEffect, useState } from "react";

function Nav() {
  const user = localStorage.getItem("user");

  const navItems = [
    { title: "Home", icon: "fas fa-house", link: "/" },
    { title: "About", icon: "fas fa-building", link: "/about" },
    !user
      ? { title: "Login", icon: "fas fa-user", link: "/login" }
      : {
          title: "Logout",
          icon: "fas fa-arrow-right-from-bracket",
          link: "/logout",
        },
  ];

  const navDom = () => {
    return navItems.map((navItem, i) => (
      <li key={i}>
        <a href={navItem.link}>{navItem.title}</a>
      </li>
    ));
  };

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
          <span className="h2 mt-1 ps-2 title">
            Fit Life
          </span>
        </a>

        {nav && (
          <div className="h-100 ms-auto d-flex align-items-center">
            <ul className="list-unstyled gap-3 mt-3 d-flex">{navDom()}</ul>
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
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;
