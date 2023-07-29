import { useEffect } from "react";
import Home from "./Home";
import axios from "axios";
import { useLocation } from "react-router-dom";

const HomeContainer = () => {
  console.log("se compro correctamente")
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  console.log({queryParams})
  const paramValue = queryParams.get('status');
  console.log({paramValue})

    useEffect(()=>{
      const data = axios.post("https://prueba-mp.vercel.app/webhook")
      data.then(res => console.log("res de webhook", res))
    },[])
  return <Home />;
};

export default HomeContainer;
