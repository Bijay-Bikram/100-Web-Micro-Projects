import { React, useState, useEffect } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

    const [onScroll, setOnScroll] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setOnScroll(true)
            } else {
                setOnScroll(false)
            }
        })
    }, [])

    function ToggleMenu() {
        setToggleMenu(!toggleMenu)
    }

    return (
        <nav className={`container ${onScroll ? 'darkNav' : ''}`}>
            <img src={Logo} alt="" className='logo' />
            <ul className={toggleMenu ? 'show-mobile-menu' : ''}>
                <li> <Link to="hero"
                    smooth={true}
                    offset={0}
                    duration={500} > Home</Link> </li>
                <li> <Link to="program"
                    smooth={true}
                    offset={-250} //offset represent the distance from top
                    duration={500} >Program</Link> </li>
                <li> <Link to="about"
                    smooth={true}
                    offset={-150}
                    duration={500} >About us</Link> </li>
                <li> <Link to="campus"
                    smooth={true}
                    offset={-250}
                    duration={500} >Campus</Link>  </li>
                <li> <Link to="testimonials"
                    smooth={true}
                    offset={-220}
                    duration={500} >Testimonial</Link> </li>
                <li><Link className='btn' to='contact' smooth={true}
                    offset={-250}
                    duration={500}> Contact us</Link></li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={ToggleMenu} />
        </nav>
    )
}

export default Navbar
