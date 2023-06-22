import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { BotonNaranja } from "../../custom/customComponents";

const ProductsList = ({ products }) => {
  return (
    <div>
      <h1>Aca van los productos</h1>
      {products.map((product, i) => {
        // 0 - 1 - 2 -3 - 4
        return (
          <div key={product.id}>
            <h1 style={{ flex: i % 2 === 0 ? "red" : "yellow" }}>
              {product.name}
            </h1>
            <Link to={`/productDetail/${product.id}`}>
              <BotonNaranja>See product</BotonNaranja>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
