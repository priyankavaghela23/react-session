import { useState } from "react";
import "../style/count.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClickIncrement = () => {
    setCount(count + 1);
  };

  const handleClickDecrement = () => {
    if(count>0){
        setCount(count - 1);
    }
    // count > 0 ? setCount(count - 1) : setCount(0)
  };

  const handleClickReset = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <h1>Counter App</h1> <br />
      <h2>{count}</h2>
      <button className="btn1" onClick={handleClickIncrement}>
        Increment
      </button>
      <button className="btn2" onClick={handleClickDecrement}>
        Decrement
      </button>
      <button className="btn3" onClick={handleClickReset}>
        Rest
      </button>
    </div>
  );
}
