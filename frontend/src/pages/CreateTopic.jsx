/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import dashboardpic from "../images/topic.webp";
import { createTopic } from "../apiCalls/topic";

const CreateTopic = () => {
  useEffect(() => {
    document.title = "Create Topics | Perfector";
  }, []);
  const [heading, setTopic] = useState("");
  const [brief, setBrief] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { heading, brief };
    const response = await createTopic(data);
    if (response.status === 201) {
      alert("Topic Created Successfully!");
      navigate("/user/dashboard");
    } else {
      alert(response.response.data.msg);
      return;
    }
  };

  return (
    <section>
      <Sidebar />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <img src={dashboardpic} alt="dashboard" id="animateimg" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <h1>Start Creating Your Topics Now!</h1>
                  <br />
                  <form onSubmit={submitHandler}>
                    <div className="mb-3">
                      <label className="form-label">Topic</label>
                      <input
                        type="text"
                        placeholder="Enter topic's heading here..."
                        className="form-control"
                        required
                        value={heading}
                        onChange={(e) => setTopic(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Brief</label>
                      <textarea
                        className="form-control"
                        placeholder="Enter topic's brief here..."
                        required
                        name=""
                        id=""
                        cols="30"
                        rows="5"
                        value={brief}
                        onChange={(e) => setBrief(e.target.value)}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success"
                      // disabled={isSigningIn}
                    >
                      {/* {isSigningIn ? "Signing In..." : "Sign In"} */}
                      Add Topic
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateTopic;
