import { useSelector } from "react-redux";
import CustomModal from "./CustomModal";


const CustomModalContainer = ({ open, handleClose }) => {

  const {cart} = useSelector( (store)=> store.cartSlice )

  return <CustomModal open={open} handleClose={handleClose} cart={cart} />;
};

export default CustomModalContainer;
