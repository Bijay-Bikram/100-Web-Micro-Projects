import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='bg-blue-900 flex justify-around items-center text-white py-3' >
            <div className="logo cursor-pointer">
                Dead-Lines
            </div>
            <ul className="flex gap-5 ">
                <li>Home</li>
                <li>Your Task</li>
            </ul>
        </nav>
    )
}

export default Navbar
