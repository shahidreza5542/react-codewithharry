import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [Random, setRandom] = useState("click refresh otp button")
  const refreshOtp = () => {
    setRandom(Math.floor(Math.random() * 1000000 + 1))
  };
  
  const btn = () => {
    setCount(count+1)
  }

  const remove = () => {
    setCount(count - 1)
  }

  if (count < 0) {
    setCount(0)
    alert('stop stop')
  }

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={btn}
      >Update count</button>
      <button onClick={remove}>remove</button>
      <p>Otp number is {Random}</p>
      <button onClick={refreshOtp}>Refresh Otp</button>
    </>
  )
}

export default App
