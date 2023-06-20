import { Outlet } from "react-router-dom";
import FooterContainer from "./footer/FooterContainer";
import NavbarContainer from "./navbar/NavbarContainer";

const Layout = () => {
  return (
    <div>
      <NavbarContainer />

      <div
        style={{ backgroundColor: "blue", minHeight: "calc(100vh  - 260px)" }}
      >
        <Outlet />
      </div>

      <FooterContainer />
    </div>
  );
};

export default Layout;
