import { Route, Routes } from "react-router-dom";
import { menuRoutes } from "./routes";
import Layout from "../components/layout/Layout";
import DashboardContainer from "../components/pages/dashboard/DashboardContainer";
import ProtectedRoutes from "./ProtectedRoutes";
import DashboardUsers from "../components/pages/dashboardUsers/DashboardUsers";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {menuRoutes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
        <Route path="/dashboard" element={<DashboardContainer />} />
        <Route path="/dashboardUsers" element={<DashboardUsers />} />
      </Route>

      <Route element={<ProtectedRoutes />}></Route>

      <Route path="*" element={<h1>No existe</h1>} />
    </Routes>
  );
};

export default AppRouter;
