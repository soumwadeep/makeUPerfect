/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import dashboardpic from "../images/todo.webp";
import { createTodo } from "../apiCalls/todo";

const CreateTodo = () => {
  useEffect(() => {
    document.title = "Create Todos | Perfector";
  }, []);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { title, description };
    const response = await createTodo(data);
    if (response.status === 201) {
      alert("Todo Created Successfully!");
      navigate("/user/dashboard");
    } else {
      alert(response.response.data.msg);
      return;
    }
  };

  return (
    <section>
      <Sidebar />
      <div className="container">
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
                  <h1>Start Creating Your Todos Now!</h1>
                  <br />
                  <form onSubmit={submitHandler}>
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
                    <button
                      type="submit"
                      className="btn btn-success"
                      // disabled={isSigningIn}
                    >
                      {/* {isSigningIn ? "Signing In..." : "Sign In"} */}
                      Add Todo
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateTodo;
