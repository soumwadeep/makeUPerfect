import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItems from "./TodoItems";
import { getTodos } from "../apiCalls/todo";

const TodoList = () => {
  const { todo, setTodo } = useContext(TodoContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTodos();
      if (response.status === 200) {
        setTodo(response.data.todos);
      } else {
        alert(response.response.data.msg);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center">All Todos</h1>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row mt-5">
          {todo.length > 0 ? (
            todo.map((item) => (
              <div className="col-sm-4" key={item._id}>
                <TodoItems key={item._id} item={item} />
              </div>
            ))
          ) : (
            <p className="text-center">You Haven't Created Any Todos Yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoList;
