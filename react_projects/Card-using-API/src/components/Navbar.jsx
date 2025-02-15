import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='bg-red-600 flex justify-center items-center py-5'>
            <ul className='flex gap-10'>
                <li>Home</li>
                <li>Service</li>
                <li>Product</li>
                <li>Blog</li>
                <li>About</li>
            </ul>
        </nav>
    )
}

export default Navbar
