import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";

import { useParams } from "react-router-dom";
import { getAllProducts } from "../../../services/productsServices";

const ProductsListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();
  console.log(products)

  useEffect(() => {

    const getData = async () => {
      const data = await getAllProducts()
      let productsByCategory = data.filter( prod => prod.category === categoryName)
      setProducts(productsByCategory);
    };
    
    getData();

  }, [categoryName]);

  return <ProductsList products={products} categoryName={categoryName} />;
};

export default ProductsListContainer;
