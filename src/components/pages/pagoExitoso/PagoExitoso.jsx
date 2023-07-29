import axios from "axios"
import { useEffect } from "react"

const PagoExitoso = () => {
    console.log("se compro correctamente")
    useEffect(()=>{
      const data = axios.post("https://prueba-mp.vercel.app/webhook")
      data.then(res => console.log("res de webhook", res))
    },[])
  return (
    <div>PagoExitoso</div>
  )
}

export default PagoExitoso