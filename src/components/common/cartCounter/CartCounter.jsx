import { Box, Button, Typography } from "@mui/material";
import {
  decrementOneById,
  incrementOneById,
  removeById,
} from "../../../store/cartSlice";
import { useDispatch } from "react-redux";

const CartCounter = ({ id, quantity, stock }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "secondary.second",
          width: "120px",
          height: "48px",
        }}
      >
        <Button
          onClick={
            quantity > 1
              ? () => dispatch(decrementOneById(id))
              : () => dispatch(removeById(id))
          }
          sx={{
            color: "primary.main",
            minWidth: "20px",
            height: "20px",
          }}
        >
          -
        </Button>
        <Typography>{quantity}</Typography>
        <Button
          onClick={() => dispatch(incrementOneById(id))}
          sx={{
            color: "primary.main",
            minWidth: "20px",
            height: "20px",
          }}
          disabled={quantity >= stock ? true : false}
        >
          +
        </Button>
      </Box>
    </div>
  );
};

export default CartCounter;
