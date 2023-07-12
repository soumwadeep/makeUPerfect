import { useEffect } from "react";
import homepic from "../images/home.webp";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
const Home = () => {
  useEffect(() => {
    document.title = "Home | makeUPerfect";
  }, []);
  return (
    <div>
      <Navbar />
      <section>
        <div className="row">
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <h1 className="mt-3">Welcome To makeUPerfect</h1>
                  <br />
                  <p>
                    Feeling Depressed Due To Lack Of Practice? Want To Excel in
                    Your Daily Tasks?
                  </p>
                  <p>
                    Look No Further! makeUPerfect Is Here To Help You Overcome
                    Your Weaknesses And Succeed In Your Favorite Subjects. With
                    makeUPerfect, You Can Create Personalized To-do Lists
                    Focused On The Areas You Want To Improve. By Breaking Down
                    Your Goals Into Manageable Daily Tasks, You&apos;ll Be Well
                    On Your Way To Achieving Success!
                  </p>
                  <p>
                    Don&apos;t Let A Lack Of Practice Bring You Down. With
                    makeUPerfect, You&apos;ll Stay Motivated And Make Progress
                    Every Day. Start Using makeUPerfect Today And Unlock Your
                    Full Potential!
                  </p>
                  <NavLink to="/user/register">
                    <button className="btn btn-success btn-lg btngo mt-3">
                      Cick Here To Register
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <img src={homepic} alt="home" id="animateimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
