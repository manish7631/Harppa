import React from "react";
import ImageLogo from "../../Image/ImageLogo.png";
import { NavLink } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar_Container">
      <div className="Navbar_Section">
        {/* ----------------Left Side -------------- */}
        <div className="Navbar_Left_Side">
          <img src={ImageLogo} alt="Navbar_Logo" />
          <h3>Computational Epigraphy Lab (CEL)</h3>
        </div>
        {/* ----------------Right Side-------------------- */}

        <div className="Navbar_Right_Side">
          {NavbarRoutes.map((e, index) => {
            return (
              <ul>
                <li>
                  <NavLink id="Navbar_Right_Side_Item" to={`${e.path}`}>
                    {e.title}
                  </NavLink>
                </li>
              </ul>
            );
          })}
        </div>

        {/* --------------Right Side Menu-------------------- */}

        <div className="Navbar_Menu">
          <MenuRoundedIcon />
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
