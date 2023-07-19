import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({onAdd , initialQuantity=1, stock }) => {
  let [counter, setCounter] = useState(initialQuantity)


  return <Counter counter={counter} setCounter={setCounter} onAdd={onAdd} stock={stock} />;
};

export default CounterContainer;
