import React, { useRef } from "react";
import ImageLogo from "../../Image/ImageLogo.png";
import { Link, NavLink } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("Navbar_responsive_nav");
  };
  return (
    <div className="Navbar_Container">
      <div className="Navbar_Section">
        {/* ----------------Left Side -------------- */}
        <div className="Navbar_Left_Side">
          <Link to="/">
            <img className="Navbar_Logo" src={ImageLogo} alt="Navbar_Logo" />
          </Link>
          <h3>Computational Epigraphy Lab (CEL)</h3>
        </div>
        {/* ----------------Right Side-------------------- */}

        <div ref={navRef} className="Navbar_Right_Side">
          {NavbarRoutes.map((e, index) => {
            return (
              <ul>
                <li>
                  <NavLink
                    onClick={showNavbar}
                    id="Navbar_Right_Side_Item"
                    to={`${e.path}`}
                  >
                    {e.title}
                  </NavLink>
                </li>
              </ul>
            );
          })}
          <div className="Navbar_Close">
            <CloseRoundedIcon onClick={showNavbar} />
          </div>
        </div>

        {/* --------------Right Side Menu-------------------- */}

        <div className="Navbar_Menu">
          <MenuRoundedIcon onClick={showNavbar} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const NavbarRoutes = [
  {
    title: "Search",
    path: "/search",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "How To Use",
    path: "/howtouse",
  },
  {
    title: "Login",
    path: "/login",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
