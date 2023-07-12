import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodo } from "../apiCalls/todo";
import Sidebar from "../components/Sidebar";
import dashboardpic from "../images/todo.webp";

const ViewTodo = () => {
  useEffect(() => {
    document.title = "View Todo | makeUPerfect";
  }, []);
  const [todo, setTodo] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getTodo(id);
      if (response.status === 200) {
        setTodo(response.data.todo);
      } else {
        alert(response.response.data.msg);
      }
    };
    fetchData();
  });
  return (
    <section>
      <Sidebar />
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1>Todo Viewer</h1>
                <h4>See The Detailed View Of Your Selected Todo Here!</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <img src={dashboardpic} alt="dashboard" id="animateimg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h1 className="text-center">Todo Info</h1>
        {todo && (
          <div className="todo-view">
            <h1>
              Title:
              {todo.title}
            </h1>
            <h2>Completed:{todo.completed ? "Completed" : "Not Completed"}</h2>
            <h4>Description:{todo.description}</h4>
            <h4>Created On:{todo.createdAt}</h4>
            <h4>Updated On:{todo.updatedAt}</h4>
          </div>
        )}
      </div>
    </section>
  );
};

export default ViewTodo;
