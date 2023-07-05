import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {

  const { accessToken, isLogged } = useSelector( store => store.authSlice)

  return <>{isLogged && accessToken ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default ProtectedRoutes;
