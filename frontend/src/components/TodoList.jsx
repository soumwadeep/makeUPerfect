import React, { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItems from "./TodoItems";
import { getTodos } from "../apiCalls/todo";

const TodoList = () => {
  const { todo, setTodo } = useContext(TodoContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTodos();
      if (response.status === 200) {
        setTodo(response.data.todos);
      } else {
        alert(response.response.data.msg);
      }
    };
    fetchData();
  });

  return (
    <div>
      <h1 className="text-center">All Todos</h1>
      <table className="table table-bordered">
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
          {todo.length > 0 &&
            todo.map((item) => {
              return <TodoItems key={item._id} item={item} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
