import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Dashboard from "./pages/Dashboard";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import { getUser } from "./apiCalls/user";
import UnProtectedRoutes from "./components/UnProtectedRoutes";
import ProtectedRoutes from "./components/ProtectedRoutes";
import CreateTodo from "./pages/CreateTodo";
import UpdateProfile from "./pages/UpdateProfile";
import UpdatePassword from "./pages/UpdatePassword";
import ViewTodo from "./pages/ViewTodo";
import UpdateTodo from "./pages/UpdateTodo";
import CreateTopic from "./pages/CreateTopic";
import ViewTopic from "./pages/ViewTopic";
import UpdateTopic from "./pages/UpdateTopic";
import CreateTodoAI from "./pages/CreateTodoAI";

const App = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUser();
        if (res.data && res.data.user) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={user && user._id ? <Dashboard /> : <Home />}
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/thankyou" element={<ThankYou />}></Route>
          <Route
            exact
            path="/user/register"
            element={
              <UnProtectedRoutes loggedIn={user && user._id ? true : false}>
                <Register />
              </UnProtectedRoutes>
            }
          />
          <Route
            exact
            path="/user/login"
            element={
              <UnProtectedRoutes loggedIn={user && user._id ? true : false}>
                <Login />
              </UnProtectedRoutes>
            }
          />
          <Route
            exact
            path="/user/dashboard"
            element={
              <ProtectedRoutes loggedIn={user && user._id ? true : false}>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route
            exact
            path="/user/profile"
            element={
              <ProtectedRoutes loggedIn={user && user._id ? true : false}>
                <Profile />
              </ProtectedRoutes>
            }
          />
          {/* Todos */}
          <Route
            exact
            path="/todo/create"
            element={
              <ProtectedRoutes loggedIn={user && user._id ? true : false}>
                <CreateTodo />
              </ProtectedRoutes>
            }
          />
          {/* Todos */}
          <Route
            exact
            path="/todo/aicreate"
            element={
              <ProtectedRoutes loggedIn={user && user._id ? true : false}>
                <CreateTodoAI />
              </ProtectedRoutes>
            }
          />
          <Route
            exact
            path="/todo/view/:id"
            element={
              <ProtectedRoutes loggedIn={user && user._id ? true : false}>
                <ViewTodo />
              </ProtectedRoutes>
            }
          />
          <Route
            exact
            path="/todo/update/:id"
            element={
              <ProtectedRoutes loggedIn={user && user._id ? true : false}>
                <UpdateTodo />
              </ProtectedRoutes>
            }
          />
          {/* Topics */}
          <Route
            exact
            path="/topic/create"
            element={
              <ProtectedRoutes loggedIn={user && user._id ? true : false}>
                <CreateTopic />
              </ProtectedRoutes>
            }
          />
          <Route
            exact
            path="/topic/view/:id"
            element={
              <ProtectedRoutes loggedIn={user && user._id ? true : false}>
                <ViewTopic />
              </ProtectedRoutes>
            }
          />
          <Route
            exact
            path="/topic/update/:id"
            element={
              <ProtectedRoutes loggedIn={user && user._id ? true : false}>
                <UpdateTopic />
              </ProtectedRoutes>
            }
          />
          <Route
            exact
            path="/user/update"
            element={
              <ProtectedRoutes loggedIn={user && user._id ? true : false}>
                <UpdateProfile />
              </ProtectedRoutes>
            }
          />
          <Route
            exact
            path="/user/updatepassword"
            element={
              <ProtectedRoutes loggedIn={user && user._id ? true : false}>
                <UpdatePassword />
              </ProtectedRoutes>
            }
          />
          <Route exact path="/404" element={<ErrorPage />}></Route>
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
