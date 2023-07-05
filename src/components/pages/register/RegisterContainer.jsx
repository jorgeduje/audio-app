import { register } from "../../../firebaseConfig"
import Register from "./Register"


const RegisterContainer = () => {

  const registrarme = async()=>{
    let res = await register({email: "marta@gmail.com", password: "marta123456"})
    console.log(res)
  }
  return (
    <>
    <button onClick={registrarme}>Registrarme</button>
    <Register />
    </>
  )
}

export default RegisterContainer