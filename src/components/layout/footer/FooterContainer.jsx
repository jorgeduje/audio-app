import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const FooterContainer = () => {
  const navigate = useNavigate();
  return <Footer navigate={navigate} />;
};

export default FooterContainer;
