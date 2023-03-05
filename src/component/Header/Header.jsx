import "./header.scss";
import logo from "../../assets/img/dumble.png";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef } from "react";

const nav_links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#exercise",
    display: "Schedule",
  },
  {
    path: "#class",
    display: "Classes",
  },
  {
    path: "#pricing",
    display: "Pricing",
  },
];
const Header = () => {
  const headerRef = useRef(null);
  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky-header");
    } else {
      headerRef.current.classList.remove("sticky-header");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);
  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav-wrapper">
          <a href="#home">
            <div className="logo">
              <div className="logo-image">
                <img src={logo} alt="" />
              </div>
              <h2>FitBody</h2>
            </div>
          </a>
          <div className="navigation">
            <div className="menu">
              {nav_links.map((item, index) => {
                return (
                  <div className="nav-item">
                    <a href={item.path}>{item.display}</a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="nav-right">
            <div>
              <button className="register-btn">Register</button>
            </div>

            <div className="mobile-button">
              <FaBars size={20} className="bar-icon" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
