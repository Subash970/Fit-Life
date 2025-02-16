import { useEffect, useState } from "react";

function Nav() {
  const [nav, setNav] = useState(
    document.documentElement.clientWidth < 992 ? false : true
  );

  const handleResize = () => {
    if (document.documentElement.clientWidth < 992) {
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

  const navItems = [
    { title: "Home", link: "/", icon: "fas fa-house" },
    { title: "About", link: "/about", icon: "far fa-address-book" },
    { title: "Login", link: "/login", icon: "fas fa-right-from-bracket" },
  ];

  const handleNavIcon = () => {
    if (nav) {
      setNav(false);
    } else {
      setNav(true);
    }
  };

  return (
    <>
      <div
        className="nav-icon cursor"
        onClick={handleNavIcon}
        hidden={document.documentElement.clientWidth < 992 ? false : true}
      >
        <i className={nav ? "fas fa-xmark" : "fas fa-bars"}></i>
      </div>
      <nav className="h-100" style={{ left: nav ? 0 : "-300px" }}>
        <h2 className="my-3 mx-3">
          <a href="/" className="text-white">
            Fit Life
          </a>
        </h2>

        <ul className="list-unstyled mx-3">
          {navItems.map((nav, i) => (
            <div key={i} className=" rounded nav-hover">
              <a href={nav.link}>
                <li className="nav-list">
                  <i className={`${nav.icon} pe-3 ps-4`} title={nav.title}></i>
                  <span className="nav-title" style={{ fontSize: "16px" }}>
                    {nav.title}
                  </span>
                </li>
              </a>
            </div>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
