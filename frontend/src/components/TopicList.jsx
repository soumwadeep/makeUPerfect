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
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Heading</th>
            <th scope="col">Brief</th>
            <th scope="col">View</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {topic.length > 0 &&
            topic.map((item) => {
              return <TopicItems key={item._id} item={item} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TopicList;
