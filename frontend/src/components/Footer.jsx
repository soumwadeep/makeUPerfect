import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <NavLink to="/" style={{ color: "black" }}>
        <h5 className="text-center mt-2">
          Copyright <b>makeUPerfect</b>.All Rights Reserved.
        </h5>
      </NavLink>
    </>
  );
};

export default Footer;
