import { Button } from "@mui/material"
import {styled} from "@mui/material/styles"

export const BotonNaranja = styled(Button)(({theme})=>({
    width: "200px",
  height: "48px",
    // [`&.${Button.classes.root}`]: {
    //     variant: 'outlined', // Cambia la variante de botón por defecto a 'outlined'
    //   },
    // backgroundColor: theme.palette.primary.main,
    // color: "white",
    // "&:hover":{
    //     backgroundColor: theme.palette.primary.second
    // }
}))
