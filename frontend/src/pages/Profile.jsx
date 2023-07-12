/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Sidebar from "../components/Sidebar";
import profile from "../images/profile.webp";
import { logout } from "../apiCalls/user";

const Profile = () => {
  useEffect(() => {
    document.title = "Your Profile | makeUPerfect";
  }, []);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await logout();
    if (response.status === 200) {
      alert("You Are Logged Out Successfully!");
      navigate("/user/login");
      setUser({});
    } else {
      alert(response);
      return;
    }
  };

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
                  <h4>
                    <b>Name:</b> {user.name}
                  </h4>
                  <h4>
                    <b>Age:</b> {user.age}
                  </h4>
                  <h4>
                    <b>Email:</b>
                    {user.email}
                  </h4>
                  <br />
                  <button type="submit" className="btn btn-success btn-lg">
                    Update Profile
                  </button>
                  <button type="submit" className="btn btn-warning btn-lg">
                    Update Password
                  </button>
                  <button
                    type="submit"
                    className="btn btn-danger btn-lg"
                    onClick={logoutHandler}
                  >
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
    </div>
  );
};

export default Profile;
