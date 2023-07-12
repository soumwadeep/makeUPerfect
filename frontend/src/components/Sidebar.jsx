/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/icon.webp";
const Sidebar = () => {
  const [userDetails, setUserDetails] = useState();
  const navigate = useNavigate();
  return (
    <>
      <button
        className="btn btn-warning sticky-top mb-3 ms-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <i className="fa-solid fa-bars"></i> &nbsp;Menu
      </button>
      <NavLink to="/Dashboard">
        <button className="btn btn-danger sticky-top mb-3 backbtn">
          &#8678; Go Back
        </button>
      </NavLink>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            <img src={logo} alt="logo" className="logo" /> makeUPerfect
          </h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "nav-link-active" : isPending ? "nav-link" : "nav-link"
            }
            to="/Dashboard"
          >
            Home
          </NavLink>
          <br />
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "nav-link-active" : isPending ? "nav-link" : "nav-link"
            }
            to="/user/profile"
          >
            Profile
          </NavLink>
          <br />
          <NavLink className="btn btn-danger text-center">Sign Out</NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
