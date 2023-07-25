import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

const CheckoutContainer = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago(import.meta.env.VITE_PUBLICKEY);

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "https://prueba-mp.vercel.app/create_preference",
        [
          {
            title: "zapatilla nilo",
            unit_price: 15,
            quantity: 3,
          },
          {
            title: "zapatilla nilo",
            unit_price: 20,
            quantity: 2,
          },
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

  return (
    <div>
      <button onClick={handleBuy}>Comprar</button>
      {preferenceId && <Wallet initialization={{ preferenceId }} />}
    </div>
  );
};

export default CheckoutContainer;
