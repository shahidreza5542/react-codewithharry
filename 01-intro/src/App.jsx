import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Card from './components/Card.jsx'

function App() {


  return (
    <>
      <Navbar />
      <div className='box'>
        <br />
        <Card price="90$" />
        <br />
        <Card price="54$" />
        <br />
        <Card price="34$" />
        <br />
        <Card price="095$" />
        <br />
        <Card price="99$" />
        <br />
        <Card price="10$" />
      </div>
      <br />
      <Footer />
    </>
  )
}

export default App
