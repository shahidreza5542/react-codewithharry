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
        <Card title="Card 1" />
        <br />
        <Card title="Card 2" />
        <br />
        <Card title="Card 3" />
        <br />
        <Card title="Card 4" />
        <br />
        <Card title="Card 5" />
        <br />
        <Card title="Card 6" />
      </div>
      <br />
      <Footer />
    </>
  )
}

export default App
