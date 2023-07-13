import React, { useContext, useEffect } from "react";
import { TopicContext } from "../context/TopicContext";
import TopicItems from "./TopicItems";
import { getTopics } from "../apiCalls/topic";

const TopicList = () => {
  const { topic, setTopic } = useContext(TopicContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTopics();
      if (response.status === 200) {
        setTopic(response.data.topics);
      } else {
        alert(response.response.data.msg);
      }
    };
    fetchData();
  });

  return (
    <div>
      <h1 className="text-center">All Topics</h1>
      <div className="row mt-5">
        {topic.length > 0 &&
          topic.map((item) => {
            return (
              <div className="col-sm-4" key={item._id}>
                <TopicItems key={item._id} item={item} />;
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TopicList;
