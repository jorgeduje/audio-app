const ProductsList = ({ products }) => {
  return (
    <div>
      <h1>Aca van los productos</h1>
      {products.map((product, i) => {
        // 0 - 1 - 2 -3 - 4
        return (
          <h1 key={product.id} style={{ flex: i % 2 === 0 ? "red" : "yellow" }}>
            {product.name}
          </h1>
        );
      })}
    </div>
  );
};

export default ProductsList;
