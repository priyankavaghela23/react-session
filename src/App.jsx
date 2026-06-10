import './App.css'
import ButtonParent from './component/Props-Ex/ButtonParent'
import StudentParent from './component/Props-Ex/StudentParent'
import ToggleMode from './component/Toggle/ToggleMode'
import { useState } from 'react'
import './style/togglemode.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
     
       <div className={darkMode ? "dark" : "light" } >
         <h1>React - Session</h1>
      {/* <StudentParent  /> */}
      {/* <ButtonParent/> */}
        <br /> <br />
        <button onClick={()=>setDarkMode(!darkMode)}>Change Mode</button>
        <ToggleMode/>
        </div>
      
    </>
  )
}

export default App
