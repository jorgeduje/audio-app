import { collection, getDocs } from "firebase/firestore";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";

const DashboardContainer = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [data, setData] = useState({});

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
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
  }, []);

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

  const deleteById = (id) => {};

  let props = {
    products,
    viewById,
    editById,
    deleteById,
    open,
    handleClose,
    disabled,
    data,
  };

  return <Dashboard {...props} />;
};

export default DashboardContainer;
