import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalDashboard from "../../common/modalDashboard/ModalDashboard";
import CreateProductModal from "../../common/createProductModal/CreateProductModal";
const Dashboard = ({
  products,
  viewById,
  data,
  editById,
  deleteById,
  open,
  handleClose,
  disabled,
  setChangesProducts,
  openCreate,
  handleCloseCreate,
  setOpenCreate,
}) => {
  return (
    <div>
      <h1>Aca manipulo los datos por que soy el admin</h1>
      <button onClick={() => setOpenCreate(true)}>Agregar</button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right">stock</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.id}
                </TableCell>
                <TableCell align="right">{product.name}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.stock}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => viewById(product)}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton onClick={() => editById(product)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteById(product)}>
                    <DeleteForeverIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open && (
        <ModalDashboard
          open={open}
          data={data}
          handleClose={handleClose}
          disabled={disabled}
          setChangesProducts={setChangesProducts}
        />
      )}
      {openCreate && (
        <CreateProductModal open={openCreate} handleClose={handleCloseCreate} />
      )}
    </div>
  );
};

export default Dashboard;
