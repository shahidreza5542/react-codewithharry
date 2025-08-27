import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("shahid")
  // const [name, setname] = useState("shahid")
  const [form, setform] = useState({name: "name",phone: "phone"})
  
  const handleclick = () => {
    alert("clicked buttion")
  }

  const handlemouseover = () => {
  }

  const handlevalue = (e) => {
    setform(e.target.value);
    console.log(e.target.value);
    
    
    
  }

  
  


  return (
    <>
      <div className="button">
        <button onClick={handleclick}>click me</button>
      </div>
      <div onMouseOver={handlemouseover} className="red">red</div>
      <input type="email" value={form.name} onChange={handlevalue} />
      <input type="phone" value={form.phone} onChange={handlevalue} />
    </>
  )
}

export default App
