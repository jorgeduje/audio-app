import { TextField } from "@mui/material"


const Register = () => {
  return (
    <div>
        <form >
            <TextField label="nombre y apellido" />
            <TextField label="url image" />
            <TextField label="email" />
            <TextField label="password" />
        </form>
    </div>
  )
}

export default Register