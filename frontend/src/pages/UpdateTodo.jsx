import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTodo, updateTodo } from "../apiCalls/todo";
import Sidebar from "../components/Sidebar";
import dashboardpic from "../images/todo.webp";
import { TodoContext } from "../context/TodoContext";

const UpdateTodo = () => {
  useEffect(() => {
    document.title = "Update Todo | makeUPerfect";
  }, []);
  const { todo, setTodo } = useContext(TodoContext);
  const { id } = useParams();
  const myTodo = todo.find((todo) => todo._id === id);
  const [title, setTitle] = useState(myTodo.title);
  const [description, setDescription] = useState(myTodo.description);
  const [completed, setCompleted] = useState(myTodo.completed);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      completed,
    };
    const response = await updateTodo(id, data);
    if (response.status === 200) {
      alert(response.data.msg);
      navigate("/user/dashboard");
    } else {
      alert(response.response.data.msg);
      return;
    }
  };
  return (
    <section>
      <Sidebar />
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <img src={dashboardpic} alt="dashboard" id="animateimg" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1>Update Todo</h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      placeholder="Enter todo's title here..."
                      className="form-control"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      placeholder="Enter todo's description here..."
                      required
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Completion Status</label>
                    <select
                      value={completed}
                      onChange={(e) => setCompleted(e.target.value)}
                      className="form-select"
                    >
                      <option value="false">Not Completed</option>
                      <option value="true">Completed</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-success">
                    Update Todo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateTodo;
