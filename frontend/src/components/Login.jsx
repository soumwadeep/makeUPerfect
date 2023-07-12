import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import signinpic from "../images/login.webp";

const Login = () => {
  useEffect(() => {
    document.title = "Login | makeUPerfect";
  }, []);
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
                  <form method="post">
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      // disabled={isSigningIn}
                    >
                      {/* {isSigningIn ? "Signing In..." : "Sign In"} */}
                      Login Now
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
