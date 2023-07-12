import { useState, useEffect, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { login } from "../apiCalls/user";
import { UserContext } from "../context/UserContext";
import signinpic from "../images/login.webp";
import Navbar from "../components/Navbar";

const Login = () => {
  useEffect(() => {
    document.title = "Login | makeUPerfect";
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = { email, password };
    const response = await login(data);
    if (response.status === 200) {
      alert("Welcome To makeUPerfect.Let's Continue Our Journey!");
      setUser(response.data.user);
      navigate("/user/dashboard");
    } else {
      alert(response.response.data.msg);
      return;
    }
  };

  return (
    <div>
      <Navbar />
      <section>
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <div className="inner">
                    <h1>Login</h1>
                    <br />
                    <form onSubmit={submitHandler}>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          placeholder="Enter your Email ID here..."
                          className="form-control"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password must be of 6 characters and above..."
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        // disabled={isSigningIn}
                      >
                        {/* {isSigningIn ? "Signing In..." : "Sign In"} */}
                        Login
                      </button>
                      <p className="mt-3">
                        New User?
                        <NavLink
                          to="/user/register"
                          style={{ color: "orangered", fontWeight: "900px" }}
                        >
                          {" "}
                          Register Now
                        </NavLink>
                        .
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <img src={signinpic} alt="login" id="animateimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
