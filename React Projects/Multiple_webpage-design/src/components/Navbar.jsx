import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header class="text-gray-600 body-font bg-green-100">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" />
                        <path d="M2.5 9H21.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                        <path d="M6.99981 6H7.00879" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.9998 6H11.0088" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <Link to="/"><span class="ml-3 text-xl text-gray-600">Web-block</span></Link>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" className="mr-5 hover:text-gray-900 cursor-pointer">Home</Link>
                    <Link to="/contact" className="mr-5 hover:text-gray-900 cursor-pointer">Contact</Link>
                    <Link to="/service" className="mr-5 hover:text-gray-900 cursor-pointer">Service</Link>
                </nav>
                <Link to="/contact"> <button class="inline-flex items-center bg-blue-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign up
                    <svg fill="blue" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button></Link>
            </div>
        </header>
    )
}

export default Navbar
