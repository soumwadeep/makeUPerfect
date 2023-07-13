import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteTopic } from "../apiCalls/topic";
import quoteimg from "../images/quote.webp";

const TopicItems = ({ item }) => {
  const navigate = useNavigate();

  const deleteHandler = async () => {
    if (window.confirm("Are you sure you want to delete this topic?")) {
      const response = await deleteTopic(item._id);
      if (response.status === 200) {
        alert(response.data.msg);
        window.location.reload();
      } else {
        alert(response.data.msg);
        return;
      }
    }
  };

  return (
    <div className="row">
      <div className="col-sm">
        <div className="card">
          <img src={quoteimg} className="card-img-top" alt="topicimg" />
          <div className="card-body">
            <h5 className="card-title">{item.heading}</h5>
            <p className="card-text">{item.brief}</p>
            <button
              className="btn btn-success"
              onClick={() => navigate(`/topic/view/${item._id}`)}
            >
              View
            </button>
            <button
              className="btn btn-warning"
              onClick={() => navigate(`/topic/update/${item._id}`)}
            >
              Update
            </button>
            <button className="btn btn-danger" onClick={deleteHandler}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicItems;
