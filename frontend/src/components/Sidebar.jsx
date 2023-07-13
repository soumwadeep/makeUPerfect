/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/icon.webp";
import { UserContext } from "../context/UserContext";
import { logout } from "../apiCalls/user";
const Sidebar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await logout();
    if (response.status === 200) {
      alert("You Are Logged Out Successfully!");
      setUser({});
      navigate("/user/login");
    } else {
      alert(response);
      return;
    }
  };
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
      <NavLink to="/user/dashboard">
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
            to="/user/dashboard"
          >
            Home
          </NavLink>
          <br />
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? "nav-link-active" : isPending ? "nav-link" : "nav-link"
            }
            to="/topic/create"
          >
            Create Topic
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
          <NavLink
            className="btn btn-danger text-center"
            onClick={logoutHandler}
          >
            Sign Out
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
