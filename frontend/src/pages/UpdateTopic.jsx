import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTopic, updateTopic } from "../apiCalls/topic";
import Sidebar from "../components/Sidebar";
import dashboardpic from "../images/topic.webp";
import { TopicContext } from "../context/TopicContext";

const UpdateTopic = () => {
  useEffect(() => {
    document.title = "Update Topic | makeUPerfect";
  }, []);
  const { topic, setTopic } = useContext(TopicContext);
  const { id } = useParams();
  const myTopic = topic.find((topic) => topic._id === id);
  const [heading, setHeading] = useState(myTopic.heading);
  const [brief, setBrief] = useState(myTopic.brief);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      heading,
      brief,
    };
    const response = await updateTopic(id, data);
    if (response.status === 200) {
      alert(response.data.msg);
      navigate("/user/dashboard");
    } else {
      alert(response.response.data.msg);
      return;
    }
  };
  return (
    <section>
      <Sidebar />
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
                <h1>Update Topic</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Heading</label>
                    <input
                      type="text"
                      placeholder="Enter topic's heading here..."
                      className="form-control"
                      required
                      value={heading}
                      onChange={(e) => setHeading(e.target.value)}
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
                  <button type="submit" className="btn btn-success">
                    Update Topic
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateTopic;
