import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteTopic } from "../apiCalls/topic";

const TopicItems = ({ item }) => {
  const navigate = useNavigate();
  const deleteHandler = async () => {
    if (window.confirm("Are You Sure To Delete This Topic?")) {
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
    <tr>
      <td>{item.heading}</td>
      <td>{item.brief}</td>
      <td>
        <button
          className="btn btn-success"
          onClick={() => navigate(`/topic/view/${item._id}`)}
        >
          View
        </button>
      </td>
      <td>
        <button
          className="btn btn-warning"
          onClick={() => navigate(`/topic/update/${item._id}`)}
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

export default TopicItems;
