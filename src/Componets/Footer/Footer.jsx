import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";

import cel_logo from "../../Image/cel_logo_dark.png";
import DAE_logo from "../../Image/DAE_logo.png";

const Footer = () => {
  return (
    <div className="Footer_Container">
      <div className="Footer_Section">
        <div className="Footer_Section_Second_Img">
          <img src={DAE_logo} alt="" />
        </div>
        <div className="Footer_Section_Third_Img">
          <img src={cel_logo} alt="" />
        </div>
        <div className="Footer_Section_Text">
          <IconButton className="Footer_Section_Text_Text">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active_nav" : "")}
              style={{
                textDecoration: "none",
              }}
            >
              <h3>Home</h3>{" "}
            </NavLink>
          </IconButton>
          <IconButton className="Footer_Section_Text_Text">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active_nav" : "")}
              style={{
                textDecoration: "none",
              }}
            >
              <h3>About</h3>{" "}
            </NavLink>
          </IconButton>
          <IconButton className="Footer_Section_Text_Text">
            <NavLink
              to="/search"
              className={({ isActive }) => (isActive ? "active_nav" : "")}
              style={{
                textDecoration: "none",
              }}
            >
              <h3>Search</h3>{" "}
            </NavLink>
          </IconButton>
          <IconButton className="Footer_Section_Text_Text">
            <NavLink
              to="/howtouse"
              className={({ isActive }) => (isActive ? "active_nav" : "")}
              style={{
                textDecoration: "none",
              }}
            >
              <h3>How To Use</h3>{" "}
            </NavLink>
          </IconButton>

          <IconButton className="Footer_Section_Text_Text">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active_nav" : "")}
              style={{
                textDecoration: "none",
              }}
            >
              <h3>Contact</h3>{" "}
            </NavLink>
          </IconButton>
        </div>
      </div>
      <div className="Footer_Section_Last_Div">
        <h3 className="Footer_Section_Last_Div_Text">
          © 2023 Computational Epigraphy Lab (CEL)
        </h3>
      </div>
    </div>
  );
};

export default Footer;
