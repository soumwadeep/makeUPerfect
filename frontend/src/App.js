import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import { getUser } from "./apiCalls/user";
import UnProtectedRoutes from "./components/UnProtectedRoutes";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUser();
      setUser(res.data.user);
    };
    fetchData();
  });
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/home"
            element={user._id ? <Dashboard /> : <Home />}
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route
            exact
            path="/user/register"
            element={
              <UnProtectedRoutes loggedIn={user._id ? true : false}>
                <Register />
              </UnProtectedRoutes>
            }
          />
          <Route
            exact
            path="/user/login"
            element={
              <UnProtectedRoutes loggedIn={user._id ? true : false}>
                <Login />
              </UnProtectedRoutes>
            }
          />
          <Route exact path="/user/dashboard" element={<Dashboard />}></Route>
          <Route
            exact
            path="/user/profile"
            element={
              <ProtectedRoutes loggedIn={user._id ? true : false}>
                <Profile />
              </ProtectedRoutes>
            }
          />
          {/* <Route exact path="/todo/create" element={<Profile />}></Route> */}
          <Route exact path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={ErrorPage} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
