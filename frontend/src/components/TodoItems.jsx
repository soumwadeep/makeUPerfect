import React from "react";

const TodoItems = () => {
  return (
    <>
      <tr>
        <th scope="row">1</th>
        <td>Title1</td>
        <td>Desc1</td>
        <td>completed1</td>
        <td>
          <button className="btn btn-success">View</button>
        </td>
        <td>
          <button className="btn btn-warning">Update</button>
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default TodoItems;
