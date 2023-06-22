import { Box, Button, Typography } from "@mui/material";
import { BotonNaranja } from "../../custom/customComponents";

const Counter = ({ counter, setCounter, onAdd }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
      }}
    >
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
          onClick={() => setCounter(counter - 1)}
          sx={{
            color: "secondary.main",
            opacity: "0.25",
            minWidth: "20px",
            height: "20px",
          }}
        >
          -
        </Button>
        <Typography>{counter}</Typography>
        <Button
          onClick={() => setCounter(counter + 1)}
          sx={{
            color: "secondary.main",
            opacity: "0.25",
            minWidth: "20px",
            height: "20px",
          }}
        >
          +
        </Button>
      </Box>

      <Box>
        <BotonNaranja
          onClick={() => onAdd(counter)}
          sx={{
            width: "160px",
          }}
          variant="contained"
        >
          Add to cart
        </BotonNaranja>
      </Box>
    </Box>
  );
};

export default Counter;
