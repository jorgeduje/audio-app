import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { useEffect, useState } from "react";
import { addToCart } from "../../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../firebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

const ProductDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const { cart } = useSelector((store) => store.cartSlice);

  let productOfCart = cart.find((elemento) => elemento.id === +id);
  let initialQuantity = productOfCart?.quantity;

  // +"14" ---> 14

  const dispatch = useDispatch();

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);
    const getData = async () => {
      let res = await getDoc(refDoc);

      setProduct({ ...res.data(), id: res.id });
    };

    getData();
  }, [id]);

  // FUNCION QUE AGREGA AL CARRITO
  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    dispatch(addToCart(data));
  };

  return (
    <ProductDetail
      product={product}
      onAdd={onAdd}
      initialQuantity={initialQuantity}
    />
  );
};

export default ProductDetailContainer;
