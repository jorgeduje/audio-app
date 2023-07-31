import { useEffect, useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../../../firebaseConfig";

const CheckoutContainer = () => {
  const { cart } = useSelector((store) => store.cartSlice);
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago(import.meta.env.VITE_PUBLICKEY, { locale: "es-AR" });
  // LUEGO DE PAGAR
  const [orderId, setOrderId] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("status");
  const [pagando, setPagando] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (paramValue === "aprovved") {
      let order = {
        name: userData.name,
        email: userData.email,
        items: cart,
        date: serverTimestamp(),
      };
      let ordersCollections = collection(db, "orders");
      addDoc(ordersCollections, order).then((res) => setOrderId(res.id));
    }
  }, [paramValue]);

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "https://prueba-mp.vercel.app/create_preference",
        [
          { title: "x", unit_price: 5, quantity: 2 },
          { title: "y", unit_price: 4, quantity: 3 },
        ]
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };
  const funcionDeLosInput = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };
  return (
    <div>
      {!pagando && (
        <div>
          <input
            type="text"
            placeholder="ingrese su nombre"
            name="name"
            onChange={funcionDeLosInput}
          />
          <input
            type="text"
            placeholder="ingrese su email"
            name="email"
            onChange={funcionDeLosInput}
          />
        </div>
      )}
      <button onClick={handleBuy}>Seleccione metodo de pago</button>
      {preferenceId && (
        <Wallet
          initialization={{ preferenceId }}
          onReady={() => setPagando(true)}
        />
      )}
      {orderId && (
        <h2>Su compra fue exitosa el numero de comprobante es {orderId}</h2>
      )}
    </div>
  );
};

export default CheckoutContainer;
