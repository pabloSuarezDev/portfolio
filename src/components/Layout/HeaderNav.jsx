import "../../assets/css/HeaderNav.css";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const HeaderNav = () => {

  const toggleNav = () => {
    document.getElementById("ham").classList.toggle("hidden");
    document.querySelector("ul").classList.toggle("menu__active");
    document.querySelector("ul").classList.toggle("animate__animated");
    document.querySelector("ul").classList.toggle("animate__backInRight");
    document.querySelector("li").classList.toggle("hidden");
    document.querySelectorAll("hr").forEach(el => {
      el.classList.toggle("hidden");
    });
  };

  return (
    <header>
      <div className="logo">
        <span>P</span>
        <p>PABLO SUÁREZ DEV</p>
      </div>
      <nav>
        <div id="ham" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li className="hidden">
            <GrClose className="close" onClick={toggleNav} />
          </li>
          <li><hr className="hidden" /></li>
          <li>
            <NavLink
              to="/inicio"
              className={({ isActive }) => isActive ? "active" : "nav-link"}
            >
              INICIO
            </NavLink>
          </li>
          <li><hr className="hidden" /></li>
          <li>
            <NavLink
              to="/proyectos"
              className={({ isActive }) => isActive ? "active" : "nav-link"}
            >
              PROYECTOS
            </NavLink>
          </li>
          <li><hr className="hidden" /></li>
          <li>
            <NavLink
              to="/curriculum"
              className={({ isActive }) => isActive ? "active" : "nav-link"}
            >
              CURRÍCULUM
            </NavLink>
          </li>
          <li><hr className="hidden" /></li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => isActive ? "active" : "nav-link"}
            >
              CONTACTO
            </NavLink>
          </li>
          <li><hr className="hidden" /></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;