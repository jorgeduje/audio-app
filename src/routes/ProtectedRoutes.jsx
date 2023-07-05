import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let isAutenticate = true;

  return <>{isAutenticate ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default ProtectedRoutes;
