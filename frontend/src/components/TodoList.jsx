import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todo, setTodo } = useContext(TodoContext);
  return (
    <div>
      <h1>All Todos</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Completed</th>
            <th scope="col">View</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <TodoList />
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
