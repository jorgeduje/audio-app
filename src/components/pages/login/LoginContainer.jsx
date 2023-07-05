import { useState } from "react";
import Login from "./Login";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login, loginWithGoogle } from "../../../firebaseConfig";
import { loginRedux } from "../../../store/authSlice";
import { useDispatch } from "react-redux";

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShow = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch()

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (data) => {
      let result = await login(data)
      dispatch( loginRedux(result.user) )
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string("Deben ser caracteres")
        .email("No corresponde con un email valido")
        .required("Este campo es obligatorio"),
      password: Yup.string("Deben ser caracteres").required("Este campo es obligatorio"),
    }),
  });

  const ingresarConGoogle = async()=>{
    let res = await loginWithGoogle()
    dispatch( loginRedux(res.user) )
  }


  return (
   <>
    <Login
      showPassword={showPassword}
      handleShow={handleShow}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />

    <button onClick={ingresarConGoogle}>Ingrear con google</button>
   </>
  );
};

export default LoginContainer;
