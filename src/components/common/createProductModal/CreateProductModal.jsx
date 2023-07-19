import { Box, Modal, TextField } from "@mui/material";
import { useFormik } from "formik";
import { db } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
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
const CreateProductModal = ({open, handleClose}) => {

    const {handleChange , handleSubmit} = useFormik({
        initialValues: {
            name:"",
            price:""
        },
        onSubmit: (data)=>{
           let obj = {
            ...data,
            price: +data.price
           }
            let productsCollection = collection(db, "products")
            addDoc(productsCollection, obj)
        },
        // validationSchema: {},
        validateOnChange: false
    })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <TextField name="name" onChange={handleChange}/>
            <TextField name="price" onChange={handleChange}/>
            <button type="submit">Enviar</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateProductModal;
