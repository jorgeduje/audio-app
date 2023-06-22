import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";
import { useWindowSize } from "../../../utils/useWindowSize";
import { menu } from "../../../routes/navigation";
import { useState } from "react";

const NavbarContainer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const size = useWindowSize(null);
  const navigate = useNavigate();
  return (
    <Navbar
      size={size}
      navigate={navigate}
      menu={menu}
      open={open}
      handleClose={handleClose}
      handleOpen={handleOpen}
    />
  );
};

export default NavbarContainer;
