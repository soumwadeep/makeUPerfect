import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import signuppic from "../images/signup.webp";
import { register } from "../apiCalls/user";
import { UserContext } from "../context/UserContext";

const Register = () => {
  useEffect(() => {
    document.title = "Register | makeUPerfect";
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password Doesn't Matched");
      return;
    }
    const data = {
      name,
      email,
      age,
      password,
    };
    const response = await register(data);
    if (response.status === 201) {
      alert("Welcome To makeUPerfect.You Are Registered!");
      setUser(response.data.user);
      navigate("/user/login");
    } else {
      alert(response);
      return;
    }
  };
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
                <form onSubmit={submitHandler}>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name here..."
                      className="form-control"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
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
                    <label className="form-label">Age</label>
                    <input
                      type="number"
                      placeholder="Enter your age here..."
                      className="form-control"
                      required
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
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
                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password must be of 6 characters and above..."
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
                      to="/user/login"
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
