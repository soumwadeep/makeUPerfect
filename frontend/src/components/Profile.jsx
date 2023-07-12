/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import profile from "../images/profile.webp";

const Profile = () => {
  return (
    <div>
      <Sidebar />
      <section className="container">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <h1>Your Profile</h1>
                  <h4>Name: </h4>
                  <h4>Mobile No: </h4>
                  <h4>Email: </h4>
                  <br />
                  <button type="submit" className="btn btn-success btn-lg">
                    Update Profile
                  </button>
                  <button type="submit" className="btn btn-warning btn-lg">
                    Update Password
                  </button>
                  <button type="submit" className="btn btn-danger btn-lg">
                    Log Out
                  </button>
                  <button type="submit" className="btn btn-danger btn-lg">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <img src={profile} alt="profile" id="animateimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
