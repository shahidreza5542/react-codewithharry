import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <div className='justify-between bg-gray-900 h-[50px] w-full'>
            <nav className='flex justify-between mr-2 ml-2'>
                <p className='mt-3 font-bold text-[20px]'>logo</p>
                <ul className='flex gap-5 mt-3 font-bold'>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contect"><li>Contect</li></Link>
                    <Link to="/login"><li>Login</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
