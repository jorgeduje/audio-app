import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { useEffect, useState } from "react";
import { getProductById } from "../../../services/productsServices";
import { addToCart } from "../../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";


const ProductDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const {cart} = useSelector( (store)=>store.cartSlice )

  let productOfCart = cart.find( elemento => elemento.id === +id )
  let initialQuantity = productOfCart?.quantity


  // +"14" ---> 14


  
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

  return <ProductDetail product={product} onAdd={onAdd} initialQuantity={initialQuantity} />;
};

export default ProductDetailContainer;
