import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import About from './component/About'
import Contect from './component/Contect'


function App() {
  const router = createBrowserRouter([
        {
          path: "/",
          element: <><Navbar/><Home/></> 
        },
        {
          path: "/login",
          element: <><Navbar/><Login/></>
        },
        {
          path: "/about",
          element: <><Navbar/><About/></>
        },
        {
          path: "/contect",
          element: <><Navbar/><Contect/></>
        },
    ])
  const [count, setCount] = useState(0)

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
