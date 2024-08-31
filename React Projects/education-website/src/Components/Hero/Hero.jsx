import './Hero.css'
import React from 'react'
import darkArrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>We ensure better Education for a better world</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, veniam vel neque corrupti aspernatur dolor amet non deserunt nulla voluptates labore, eaque nesciunt fugit. </p>
            </div>
            <button className='btn'>Explore More <img src={darkArrow} alt="Arrow" /> </button>
        </div>
    )
}

export default Hero
