import styles from "./Footer.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../../utils/useWindowSize";
import { menu } from "../../../routes/navigation";
const Footer = ({navigate}) => {
  const size = useWindowSize();

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar className={styles.footerContainer} position="relative">
        <Toolbar className={styles.bar}>
          <img
            src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1682637939/audiophileEcommerce/shared/desktop/logo_qnvapf.svg"
            alt="title"
            className={styles.name}
            onClick={() => navigate("/")}
          />
          <div className={styles.items}>
            {menu.map((item) => {
              return (
                <Link
                  key={item.id}
                  sx={{ flexGrow: 1 }}
                  className={styles.item}
                  to={item.path}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </Toolbar>
        {size.width > 800 ? (
          <>
            <div className={styles.descriptionIcons}>
              <p className={styles.description}>
                Audiophile is an all in one stop to fulfill your audio needs.
                Were a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - were open 7 days a week.
              </p>
              <section className={styles.icons}>
                <Link to="https://www.facebook.com/" className={styles.social}>
                  <FacebookIcon />
                </Link>
                <Link to="https://www.twitter.com/" className={styles.social}>
                  <TwitterIcon />
                </Link>
                <Link to="https://www.instagram.com/" className={styles.social}>
                  <InstagramIcon />
                </Link>
              </section>
            </div>
            <p className={styles.copyRights}>
              Copyright 2021. All Rights Reserved
            </p>
          </>
        ) : (
          <>
            <p className={styles.description}>
              Audiophile is an all in one stop to fulfill your audio needs. Were
              a small team of music lovers and sound specialists who are devoted
              to helping you get the most out of personal audio. Come and visit
              our demo facility - were open 7 days a week.
            </p>
            <Box className={styles.bottom}>
              <p className={styles.copyRights}>
                Copyright 2021. All Rights Reserved
              </p>
              <section className={styles.icons}>
                <Link to="https://www.facebook.com/" className={styles.social}>
                  <FacebookIcon />
                </Link>
                <Link to="https://www.twitter.com/" className={styles.social}>
                  <TwitterIcon />
                </Link>
                <Link to="https://www.instagram.com/" className={styles.social}>
                  <InstagramIcon />
                </Link>
              </section>
            </Box>
          </>
        )}
      </AppBar>
    </Box>
  );
}

export default Footer