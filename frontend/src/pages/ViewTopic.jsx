import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTopic } from "../apiCalls/topic";
import { getTodos } from "../apiCalls/todo";
import Sidebar from "../components/Sidebar";
import dashboardpic from "../images/topic.webp";
import TodoItems from "../components/TodoItems";

const ViewTopic = () => {
  useEffect(() => {
    document.title = "View Topic | makeUPerfect";
  }, []);

  const [topic, setTopic] = useState({});
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTopic(id);
      if (response.status === 200) {
        setTopic(response.data.topic);
      } else {
        alert(response.response.data.msg);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await getTodos();
      if (response.status === 200) {
        const filteredTodos = response.data.todos.filter(
          (todo) => todo.topic === topic._id
        );
        setTodos(filteredTodos);
      } else {
        alert(response.response.data.msg);
      }
      setIsLoading(false);
    };
    fetchTodos();
  }, [topic]);

  return (
    <section>
      <Sidebar />
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1>Topic Viewer</h1>
                <h4>See The Detailed View Of Your Selected Topic Here!</h4>
                {topic && (
                  <div className="todo-view mt-4">
                    <h1>Topic Name: {topic.heading}</h1>
                    <h4>About Topic:</h4>
                    <p>{topic.brief}</p>
                    <h4>Created On:</h4>
                    <p>{topic.createdAt}</p>
                    <h4>Updated On:</h4>
                    <p>{topic.updatedAt}</p>
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
      <div className="row">
        <h1 className="text-center">Todos Of {topic.heading}</h1>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-grow text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : todos.length > 0 ? (
          todos.map((todo) => (
            <div className="col-sm-4" key={todo._id}>
              <TodoItems key={todo._id} item={todo} />
            </div>
          ))
        ) : (
          <p className="text-center">No Todos Available.</p>
        )}
      </div>
    </section>
  );
};

export default ViewTopic;
