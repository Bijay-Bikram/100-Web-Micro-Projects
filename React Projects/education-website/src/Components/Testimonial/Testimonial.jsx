import { React, useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Card = ({ profile, name, position }) => {
    return (
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={profile} alt="" />
                    <div>
                        <h3>{name}</h3>
                        <span>{position}</span>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam reiciendis similique necessitatibus magnam sunt nisi vero quis saepe facilis.</p>
            </div>
        </li>
    )
}

const Testimonial = () => {
    const slider = useRef()
    let hz = 0;

    // This slider is not good enough
    const slideForward = () => {
        if (hz > -50) {
            hz -= 25;
            slider.current.style.transform = `translateX(${hz}%)`;
        }
    }

    const slideBackward = () => {
        if (hz < 0) {
            hz += 25;
            slider.current.style.transform = `translateX(${hz}%)`;
        }
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <Card profile={user_1} name={'Caroline Aames'} position={'Student'} />
                    <Card profile={user_2} name={'Jane Doe'} position={'Student'} />
                    <Card profile={user_3} name={'Angila Illias '} position={'Student'} />
                    <Card profile={user_4} name={'Jane Musk'} position={'Student'} />
                </ul>
            </div>
        </div>
    )
}

export default Testimonial
