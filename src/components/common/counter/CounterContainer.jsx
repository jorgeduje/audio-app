import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({onAdd}) => {
  let [counter, setCounter] = useState(1)


  return <Counter counter={counter} setCounter={setCounter} onAdd={onAdd} />;
};

export default CounterContainer;
