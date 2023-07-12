import { useEffect } from "react";
import aboutpic from "../images/about.webp";
const ErrorPage = () => {
  useEffect(() => {
    document.title = "404 | makeUPerfect";
  }, []);
  return (
    <section>
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <img src={aboutpic} alt="about" id="animateimg" />
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
  );
};

export default ErrorPage;