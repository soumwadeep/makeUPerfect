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
                {todo && (
                  <div className="todo-view mt-4">
                    <h1>
                      Todo Title:
                      {todo.title}
                    </h1>
                    <h4>Completion Status:</h4>
                    <p>{todo.completed ? "Completed" : "Not Completed"}</p>
                    <h4>Description:</h4>
                    <p>{todo.description}</p>
                    <h4>Created On:</h4>
                    <p>{todo.createdAt}</p>
                    <h4>Updated On:</h4>
                    <p>{todo.updatedAt}</p>
                  </div>
                )}
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
    </section>
  );
};

export default ViewTodo;
