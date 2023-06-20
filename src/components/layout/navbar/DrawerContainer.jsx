import { useState } from "react";
import DrawerPres from "./DrawerPres";

const DrawerContainer = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return <DrawerPres state={state} toggleDrawer={toggleDrawer} />;
};

export default DrawerContainer;
