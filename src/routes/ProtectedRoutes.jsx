import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {

  const { accessToken, isLogged, user } = useSelector( store => store.authSlice)

  return <>{isLogged && accessToken && user.rol === "admin" ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default ProtectedRoutes;
