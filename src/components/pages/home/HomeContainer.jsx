import { useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";
import { useLocation } from "react-router-dom";

const HomeContainer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  console.log({ queryParams });
  const paramValue = queryParams.get("status");

  const [data, setData] = useState(null);
  const [param, setParam] = useState(null);

  useEffect(() => {
    setParam(paramValue);
    const data = axios.post(
      `https://prueba-mp.vercel.app/webhook/${location.search}`
    );
    data.then((res) => setData(res.data));
  }, [location.search, paramValue]);
  return (
    <div>
      {data && JSON.stringify(data)}
      {param && JSON.stringify(param)}

      <Home />
    </div>
  );
};

export default HomeContainer;
