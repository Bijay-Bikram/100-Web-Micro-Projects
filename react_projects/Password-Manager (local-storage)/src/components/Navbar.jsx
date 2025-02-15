import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer flex  justify-between items-center px-4  h-14">
                <div className='logo font-bold text-2xl'>
                    <span className='text-green-500'>&lt; PW</span>
                    manager
                    <span className='text-green-500'>/&gt;</span>
                </div>
                <ul className='md:block hidden'>
                    <li className='space-x-5'>
                        <a className='hover:font-bold' href="/">Home</a>
                        <a className='hover:font-bold' href="/about">About</a>
                        <a className='hover:font-bold' href="/blog">Blog</a>
                    </li>
                </ul>
                <button className='text-white bg-green-700 rounded-full flex items-center justify-between ring-white ring-1'>
                    <img className='invert w-10' src="public/github.svg" alt="github" />
                    <span className='px-3 font-bold'> Github</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
