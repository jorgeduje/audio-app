import { Link } from "react-router-dom";
import { BotonNaranja } from "../../custom/customComponents";
import { Box, Typography } from "@mui/material";

const ProductsList = ({ products, categoryName }) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "120px",
          backgroundColor: "secondary.main",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          color="secondary.second"
          variant="h4"
          sx={{ textTransform: "uppercase" }}
        >
          {categoryName}
        </Typography>
      </Box>

      {products.map((product, i) => {
        // 0 - 1 - 2 -3 - 4
        return (
          <div key={product.id}>
            <h1 style={{ flex: i % 2 === 0 ? "red" : "yellow" }}>
              {product.name}
            </h1>
            <Link to={`/productDetail/${product.id}`}>
              <BotonNaranja variant="contained">See product</BotonNaranja>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
