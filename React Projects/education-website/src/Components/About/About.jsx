import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='paly-icon' onClick={() => setPlayState(true)} />
            </div>
            <div className="about-right">
                <h3>about university</h3>
                <h2>Nuturing the Tommorow's leaders Today </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae iste asperiores saepe. Animi saepe provident molestias, necessitatibus autem molestiae eius veniam esse ea doloremque, veritatis officia porro ipsum, blanditiis dolores. .</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam eaque similique maxime maiores temporibus, illum nulla earum hic aliquid doloribus.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta ullam eius voluptatum sequi quo temporibus mollitia numquam, quae ab, officiis iste illum, ea corporis impedit? Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>

        </div>
    )
}

export default About
