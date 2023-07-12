import { useEffect } from "react";
import errorimg from "../images/errorimg.webp";
import Navbar from "../components/Navbar";
const ErrorPage = () => {
  useEffect(() => {
    document.title = "404 | makeUPerfect";
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
                  <img src={errorimg} alt="about" id="animateimg" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <h1>Whoops!</h1>
                  <h5>
                    It Seems Like We Couldn't Find The Page You Were Looking
                    For...
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
