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
      <div className="row mt-5">
        {todo.length > 0 &&
          todo.map((item) => {
            return (
              <div className="col-sm-4" key={item._id}>
                <TodoItems key={item._id} item={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
