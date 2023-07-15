import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import Swal from "sweetalert2";
const DashboardContainer = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [data, setData] = useState({});
  const [changesProducts, setChangesProducts] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setChangesProducts(false);
    let refCollection = collection(db, "products");

    const getData = async () => {
      let res = await getDocs(refCollection);
      console.log(res.docs);
      let productosFinales = res.docs.map((prod) => {
        return { ...prod.data(), id: prod.id };
      });

      setProducts(productosFinales);
    };

    getData();
  }, [changesProducts]);

  const viewById = (product) => {
    setData(product);
    setDisabled(true);
    setOpen(true);
  };

  const editById = (product) => {
    setData(product);
    setDisabled(false);
    setOpen(true);
  };

  const deleteById = (product) => {
    Swal.fire({
      title: `Seguro quieres elimar el producto ${product.name}`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, eliminar",
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteDoc(doc(db, "products", product.id));
        Swal.fire("Producto eliminado exitosamente", "", "success");
        setChangesProducts(true);
      } else if (result.isDenied) {
        Swal.fire("El producto queda como estaba", "", "info");
      }
    });
  };

  let props = {
    products,
    viewById,
    editById,
    deleteById,
    open,
    handleClose,
    disabled,
    data,
    setChangesProducts
  };

  return <Dashboard {...props} />;
};

export default DashboardContainer;
