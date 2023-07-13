import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteTodo } from "../apiCalls/todo";

const TodoItems = ({ item }) => {
  const navigate = useNavigate();
  const deleteHandler = async () => {
    if (window.confirm("Are You Sure To Delete This Todo?")) {
      const response = await deleteTodo(item._id);
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
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Status: {item.completed ? "Completed" : "Not Completed"}
            </h6>
            <p className="card-text">Topic ID: {item.topic}</p>
            <p className="card-text">{item.description}</p>
            <button
              className="btn btn-success"
              onClick={() => navigate(`/todo/view/${item._id}`)}
            >
              View This Todo
            </button>
            <button
              className="btn btn-warning"
              onClick={() => navigate(`/todo/update/${item._id}`)}
            >
              Update This Todo
            </button>
            <button className="btn btn-danger" onClick={deleteHandler}>
              Delete This Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItems;
