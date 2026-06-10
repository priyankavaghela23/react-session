import { useState } from "react";
import "../../style/button.css";
export default function ButtonChild({ text, type, handleClick }) {
  

  const handleFunctionProps = () => {
    if (handleClick) {
      handleClick("Pinky");
    } else {
      console.log("No function passed");
    }
  };
  return (
    <>
      <button onClick={handleFunctionProps} className={type}>
        {text}
      </button>
    </>
  );
}

export function InputText({handleInput}){
    return(
        <>
        <input type="text" onChange={(e)=>handleInput(e.target.value)} placeholder='Enter Text'  />
        </>
    )
}

export function HandleCard({handlecard,type}){
    return(
        <>
        <h1>Lifting State Up Example</h1>
        <button className={type} onClick={()=>handlecard("React","React JS Library")}>Click Me</button>
        </>
    )
}