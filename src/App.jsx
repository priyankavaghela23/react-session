import "./App.css";
import ButtonParent from "./component/Props-Ex/ButtonParent";
import StudentParent from "./component/Props-Ex/StudentParent";
import ToggleMode from "./component/Toggle/ToggleMode";
import { useState } from "react";
import "./style/togglemode.css";
import { UseRefEx1 } from "./component/UseRefEx.jsx/UseRefEX1";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {/* <div className={darkMode ? "dark" : "light" } > */}
      {/* <button onClick={()=>setDarkMode(!darkMode)}>Change Mode</button> */}
      {/* <ToggleMode/> */}

      <div>
        <h1>React - Session</h1>
        {/* <StudentParent  /> */}
        {/* <ButtonParent/> */}
        <UseRefEx1/>
        <br /> <br />
      </div>
    </>
  );
}

export default App;
