import { Box, Modal, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { BotonNaranja } from "../../custom/customComponents";

let stilosModal = {
  position: "absolute",
  top: "35%",
  right: "0%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  minHeight: "400px",
};

const CustomModal = ({ open, handleClose, cart }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stilosModal}>
         {
          cart.map( prod => <h4 key={prod.id}>{prod.name}</h4>)
         }
          <Link to="/checkout">
            <BotonNaranja onClick={handleClose} variant="contained">CHECKOUT</BotonNaranja>
          </Link>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
