import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Drawer.module.css";
import { Link } from "react-router-dom";
import { menu } from "../../../routes/navigation";

const DrawerPres = ({ state, toggleDrawer }) => {
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "secondary.main",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menu.map((text) => (
          <ListItem key={text.id} disablePadding>
            <Link to={text.path} className={styles.itemLink}>
              <ListItemText primary={text.title} key={text.id} />
            </Link>
          </ListItem>
        ))}
      </List>
      <hr style={{ color: "secondary.second", margin: "1.5rem 1rem" }} />
      <Box className={styles.linksBox}>
        <Link
          to="/register"
          style={{
            color: "#d87d4a",
            textDecoration: "none",
            margin: "1rem 2rem 0",
          }}
        >
          Signin
        </Link>
        <Link
          to="/login"
          style={{
            color: "#d87d4a",
            textDecoration: "none",
            margin: "1rem 2rem 0",
          }}
        >
          Login
        </Link>
      </Box>
    </Box>
  );
  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className={styles.menu}>
            <MenuIcon sx={{ padding: "0" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            className={styles.menuItems}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DrawerPres;
