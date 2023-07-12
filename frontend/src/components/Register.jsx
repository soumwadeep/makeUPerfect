import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import signuppic from "../images/signup.webp";

const Register = () => {
  useEffect(() => {
    document.title = "Register | makeUPerfect";
  }, []);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  return (
    <section>
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <img src={signuppic} alt="signup" id="animateimg" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1>Register</h1>
                <br />
                <form method="post">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      onChange={(e) => {
                        setUser({
                          ...user,
                          name: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="number"
                      className="form-control"
                      required
                      onChange={(e) => {
                        setUser({
                          ...user,
                          phone: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      required
                      onChange={(e) => {
                        setUser({
                          ...user,
                          email: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      required
                      onChange={(e) => {
                        setUser({
                          ...user,
                          password: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-warning"
                    // onClick={registerUser}
                  >
                    Register
                  </button>
                  <p className="mt-3">
                    Already Registered?
                    <NavLink
                      to="/SignIn"
                      style={{ color: "orangered", fontWeight: "900px" }}
                    >
                      {" "}
                      Login Now
                    </NavLink>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
