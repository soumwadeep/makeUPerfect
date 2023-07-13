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

  const createTodoHandler = () => {
    navigate(`/todo/create?topicId=${item._id}`);
  };

  return (
    <div className="row">
      <div className="col-sm">
        <div className="card">
          <img src={quoteimg} className="card-img-top" alt="topicimg" />
          <div className="card-body">
            <h5 className="card-title">{item.heading}</h5>
            <p className="card-text">{item.brief}</p>
            <button className="btn btn-info" onClick={createTodoHandler}>
              Create A Todo
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/topic/view/${item._id}`)}
            >
              Show All Todos Of {item.heading}
            </button>
            <button
              className="btn btn-warning"
              onClick={() => navigate(`/topic/update/${item._id}`)}
            >
              Update Topic Details
            </button>
            <button className="btn btn-danger" onClick={deleteHandler}>
              Delete This Topic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicItems;
