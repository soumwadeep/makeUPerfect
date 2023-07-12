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

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/user/register" element={<Register />}></Route>
          <Route exact path="/user/login" element={<Login />}></Route>
          <Route exact path="/user/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/user/profile" element={<Profile />}></Route>
          <Route exact path="/todo/create" element={<Profile />}></Route>
          <Route exact path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={ErrorPage} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
