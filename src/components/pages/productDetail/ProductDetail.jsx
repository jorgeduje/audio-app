import CounterContainer from "../../common/counter/CounterContainer"

const ProductDetail = ({product, onAdd}) => {

  return (
    <div>
     
        <h3>{product.name}</h3>
        <h4>{product.description}</h4>
        <CounterContainer onAdd={onAdd} />
    </div>
  )
}

export default ProductDetail