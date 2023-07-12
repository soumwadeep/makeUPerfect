import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updatePassword } from "../apiCalls/user";
import updatepasswordimg from "../images/updatepasswordimg.webp";
import Sidebar from "../components/Sidebar";

const UpdatePassword = () => {
  useEffect(() => {
    document.title = "Update Password | makeUPerfect";
  }, []);
  const [oldpassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password Doesn't Matched!");
      return;
    }
    const data = {
      password: oldpassword,
      newPassword: password,
    };
    const response = await updatePassword(data);
    if (response.status === 200) {
      alert("Your Password Has Been Updated Successfully!");
      navigate("/user/dashboard");
    } else {
      alert(response.response.data.msg);
      return;
    }
  };

  return (
    <div>
      <Sidebar />
      <section>
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <div className="inner">
                    <img
                      src={updatepasswordimg}
                      alt="update password"
                      id="animateimg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <h1>Update Password</h1>
                  <br />
                  <form onSubmit={submitHandler}>
                    <div className="mb-3">
                      <label className="form-label">Current Password</label>
                      <input
                        type="password"
                        placeholder="Enter your current password here..."
                        className="form-control"
                        required
                        value={oldpassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">New Password</label>
                      <input
                        type="password"
                        placeholder="Enter your new password here..."
                        className="form-control"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Confirm Password</label>
                      <input
                        type="password"
                        placeholder="Enter your new password again..."
                        className="form-control"
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
                      Change Password
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdatePassword;
