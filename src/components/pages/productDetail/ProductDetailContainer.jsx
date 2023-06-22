import { useParams } from "react-router-dom"
import ProductDetail from "./ProductDetail"
import { useEffect, useState } from "react"
import {getProductById} from "../../../services/productsServices"

const ProductDetailContainer = () => {

  const {id} = useParams()

  const [product, setProduct] = useState({})
  console.log(product)

  useEffect(()=>{

    const getData = async ()=>{
      let data = await getProductById(id)
      setProduct(data)
    }

    getData()

  },[id])

  // FUNCION QUE AGREGA AL CARRITO
  const onAdd = ( cantidad )=>{
    // producto 
    // cantidad 

    let data = {
      ...product,
      quantity: cantidad
    }

    console.log("agregue al carrito: ", data)

  }
    
  return (
    <ProductDetail product={product} onAdd={onAdd} />
  )
}

export default ProductDetailContainer