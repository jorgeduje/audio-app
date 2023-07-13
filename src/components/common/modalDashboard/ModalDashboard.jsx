import { Box, Modal, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ModalDashboard = ({ open, data, disabled, handleClose }) => {
  console.log("deshabilitar los inputs", disabled);
  console.log("data: ", data);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <TextField
              name="name"
              defaultValue={data.name}
              disabled={disabled}
            />
            {!disabled && <button>Enviar</button>}
            <button type="button" onClick={handleClose}>
              Cerrar
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalDashboard;
