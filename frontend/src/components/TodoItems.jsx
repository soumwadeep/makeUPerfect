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
    <tr>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.completed ? "Completed" : "Not Completed"}</td>
      <td>
        <button
          className="btn btn-success"
          onClick={() => navigate(`/todo/view/${item._id}`)}
        >
          View
        </button>
      </td>
      <td>
        <button
          className="btn btn-warning"
          onClick={() => navigate(`/todo/update/${item._id}`)}
        >
          Update
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={deleteHandler}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoItems;
