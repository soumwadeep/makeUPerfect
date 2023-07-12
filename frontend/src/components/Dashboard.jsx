/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import dashboardpic from "../images/todo.webp";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Perfector";
  }, []);
  const navigate = useNavigate();

  return (
    <section>
      <Sidebar />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <h1>Welcome To makeUPerfect&apos;s Dashboard!</h1>
                  <p>Some Instructions:</p>
                  <p>Start Creating Your Favourite Topics Here.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <img src={dashboardpic} alt="dashboard" id="animateimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h1 className="text-center mb-3">Your Topics</h1>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
