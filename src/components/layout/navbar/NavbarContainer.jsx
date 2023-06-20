import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../../utils/useWindowSize";
import { menu } from "../../../routes/navigation";

const NavbarContainer = () => {
  const size = useWindowSize(null);
  const navigate = useNavigate();
  return <Navbar size={size} navigate={navigate} menu={menu} />;
};

export default NavbarContainer;
