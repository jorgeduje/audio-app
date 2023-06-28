import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { useEffect, useState } from "react";
import { getProductById } from "../../../services/productsServices";
import { addToCart } from "../../../store/cartSlice";
import { useDispatch } from "react-redux";


const ProductDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  
  const dispatch = useDispatch()

  useEffect(() => {
    const getData = async () => {
      let data = await getProductById(id);
      setProduct(data);
    };

    getData();
  }, [id]);

  // FUNCION QUE AGREGA AL CARRITO
  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

   dispatch( addToCart(data) ) 
  };

  return <ProductDetail product={product} onAdd={onAdd} />;
};

export default ProductDetailContainer;
