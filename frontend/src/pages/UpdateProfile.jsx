import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import updateprofileimg from "../images/updateprofile.webp";
import { updateUser } from "../apiCalls/user";
import { UserContext } from "../context/UserContext";
import Sidebar from "../components/Sidebar";

const UpdateProfile = () => {
  useEffect(() => {
    document.title = "Update Profile | makeUPerfect";
  }, []);
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      name,
      phone,
      email,
      age,
    };
    const response = await updateUser(data);
    if (response.status === 200) {
      alert("Your Details Are Updated Successfully!");
      setUser(response.data.user);
      navigate("/user/profile");
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
                  <h1>Update Your Profile</h1>
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
                      <label className="form-label">Mobile No.</label>
                      <input
                        type="number"
                        placeholder="Enter your mobile no. here..."
                        className="form-control"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                    <button
                      type="submit"
                      className="btn btn-warning"
                      // onClick={registerUser}
                    >
                      Update Profile
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <img
                    src={updateprofileimg}
                    alt="updateprofile"
                    id="animateimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateProfile;
