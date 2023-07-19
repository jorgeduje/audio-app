import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";

import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";

import { collection, getDocs, query, where } from "firebase/firestore";

const ProductsListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let refCollection = collection(db, "products");
    let filteredCollection = query(
      refCollection,
      where("category", "==", categoryName)
    );

    const getData = async () => {
      let res = await getDocs(filteredCollection);
      console.log(res.docs)
      let productosFinales = res.docs.map(prod => {
        return {...prod.data(), id: prod.id}
      } )
     
      setProducts( productosFinales )

    };

    getData();

  }, [categoryName]);

  return <ProductsList products={products} categoryName={categoryName} />;
};

export default ProductsListContainer;
