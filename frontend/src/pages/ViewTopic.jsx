import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTopic } from "../apiCalls/topic";
import Sidebar from "../components/Sidebar";
import dashboardpic from "../images/topic.webp";

const ViewTopic = () => {
  useEffect(() => {
    document.title = "View Topic | makeUPerfect";
  }, []);
  const [topic, setTopic] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getTopic(id);
      if (response.status === 200) {
        setTopic(response.data.topic);
      } else {
        alert(response.response.data.msg);
      }
    };
    fetchData();
  });
  return (
    <section>
      <Sidebar />
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1>Topic Viewer</h1>
                <h4>See The Detailed View Of Your Selected Topic Here!</h4>
                {topic && (
                  <div className="todo-view mt-4">
                    <h1>
                      Topic Name:
                      {topic.heading}
                    </h1>
                    <h4>About Topic:</h4>
                    <p>{topic.brief}</p>
                    <h4>Created On:</h4>
                    <p>{topic.createdAt}</p>
                    <h4>Updated On:</h4>
                    <p>{topic.updatedAt}</p>
                  </div>
                )}
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
    </section>
  );
};

export default ViewTopic;
