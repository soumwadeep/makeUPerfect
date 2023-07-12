import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import signinpic from "../images/login.webp";

const Login = () => {
  useEffect(() => {
    document.title = "Login | makeUPerfect";
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <section>
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <div className="inner">
                  <h1>Login</h1>
                  <br />
                  <form>
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
                        to="/SignUp"
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
  );
};

export default Login;
