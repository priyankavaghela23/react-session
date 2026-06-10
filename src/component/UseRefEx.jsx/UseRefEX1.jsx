import { useRef } from "react";
export function UseRefEx1() {
  const inputref = useRef(null);
  const h1ref = useRef(null)

  const inputHandler = () => {
    console.log(inputref);
    // inputref.current.focus()
    inputref.current.style.color = "#212121";
    inputref.current.style.backgroundColor = "pink";
    inputref.current.style.borderColor = "green";
    inputref.current.value = "Vihaana";
  };

  const toggleHandler = () => {
    if (inputref.current.style.display != "none") {
      inputref.current.style.display = "none";
    } else {
      inputref.current.style.display = "inline";
    }
  };

  const handlerH1 =() => {
    h1ref.current.style.color = "skyblue"

  }
  return (
    <>
      <h2>UseRef Example</h2> <hr />
      <button onClick={toggleHandler}>Toggle</button> <br />
      <br />
      <input ref={inputref} type="text" placeholder="Enter User Name" /> <br />
      <br />
      <button onClick={inputHandler}>Click Me</button> <br /><br /> <hr />

      <h1 ref={h1ref}>Hello UseRef Hook</h1> <br />
      <button onClick={handlerH1}>Click Here</button>


    </>
  );
}
