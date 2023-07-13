import React, { useContext, useEffect, useState } from "react";
import { TopicContext } from "../context/TopicContext";
import TopicItems from "./TopicItems";
import { getTopics } from "../apiCalls/topic";

const TopicList = () => {
  const { topic, setTopic } = useContext(TopicContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTopics();
      if (response.status === 200) {
        setTopic(response.data.topics);
      } else {
        alert(response.response.data.msg);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center">All Topics</h1>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row mt-5">
          {topic.length > 0 ? (
            topic.map((item) => (
              <div className="col-sm-4" key={item._id}>
                <TopicItems key={item._id} item={item} />
              </div>
            ))
          ) : (
            <p className="text-center">You Haven't Created Any Topics Yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TopicList;
