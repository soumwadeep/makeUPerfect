import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ loggedIn, children }) => {
  if (!loggedIn) {
    return <Navigate to="/user/login" replace />;
  }
  return children;
};

export default ProtectedRoutes;
