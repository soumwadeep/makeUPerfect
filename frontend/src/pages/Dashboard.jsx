/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import dashboardpic from "../images/todo.webp";
import TodoList from "../components/TodoList";
import TopicList from "../components/TopicList";

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
                  <h3>Start Your Journey With Us By Creating Your Desired Topics!</h3>
                  <button className="btn btn-info btn-lg" onClick={() => navigate("/topic/create")}>Click Here To Create A Topic</button>
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
          <TopicList />
          {/* <h1 className="text-center mb-3">Your Topics</h1> */}
          <TodoList />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
