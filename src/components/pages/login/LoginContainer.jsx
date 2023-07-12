import { useState } from "react";
import Login from "./Login";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login, loginGoogle } from "../../../store/authThunk";

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShow = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log(data);
      dispatch(login(data));
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string("Deben ser caracteres")
        .email("No corresponde con un email valido")
        .required("Este campo es obligatorio"),
      password: Yup.string("Deben ser caracteres").required(
        "Este campo es obligatorio"
      ),
    }),
  });

  return (
    <>
      <Login
        showPassword={showPassword}
        handleShow={handleShow}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errors={errors}
      />

      <button onClick={() => dispatch(loginGoogle())}>
        Ingrear con google
      </button>
    </>
  );
};

export default LoginContainer;
