import { useDispatch, useSelector } from "react-redux";
import CustomModal from "./CustomModal";
import { useEffect } from "react";
import { getTotalPrice } from "../../../store/cartSlice";

const CustomModalContainer = ({ open, handleClose }) => {
  const { cart, total } = useSelector((store) => store.cartSlice);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getTotalPrice())
  }, [cart, dispatch])
 

  return (
    <CustomModal
      open={open}
      handleClose={handleClose}
      cart={cart}
      dispatch={dispatch}
      total={total}
    />
  );
};

export default CustomModalContainer;
