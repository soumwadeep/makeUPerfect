import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { TodoContextProvider } from "./context/TodoContext";
import { TopicContextProvider } from "./context/TopicContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <TopicContextProvider>
        <TodoContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </TodoContextProvider>
      </TopicContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
