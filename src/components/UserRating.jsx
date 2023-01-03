import React from 'react'
import './css/UserRating.css'
import userImg1 from '../assets/mizanur.jpg'
import userImg2 from '../assets/sofi.jpg'
import userImg3 from '../assets/wasim.jpg'
import userImg4 from '../assets/dia.jpg'
import stars from '../assets/stars.png'

const UserRating = () => {
    return (
        <div className='userrating'>
            <div className='card'>
                <div className='cardimg'>
                    <img src={userImg1} alt="UserIMG" />
                </div>
                <div className='cardInfo'>
                    <div className='starsContainer'>
                        <img className="stars" src={stars} alt="Stars" />
                        <p>4.7/5</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam obcaecati at ipsum impedit nesciunt qui aliquid fugit.
                    </p>
                </div>
            </div>
            <div className='card'>
                <div className='cardimg'>
                    <img src={userImg2} alt="UserIMG" />
                </div>
                <div className='cardInfo'>
                    <div className='starsContainer'>
                        <img className="stars" src={stars} alt="Stars" />
                        <p>4.0/5</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam obcaecati at ipsum impedit nesciunt qui aliquid fugit.
                    </p>
                </div>
            </div>
            <div className='card'>
                <div className='cardimg'>
                    <img src={userImg3} alt="UserIMG" />
                </div>
                <div className='cardInfo'>
                    <div className='starsContainer'>
                        <img className="stars" src={stars} alt="Stars" />
                        <p>4.1/5</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam obcaecati at ipsum impedit nesciunt qui aliquid fugit, laboriosam, autem quam magnam eius illo tenetur, molestiae harum veritatis laborum rem.
                    </p>
                </div>
            </div>
            <div className='card'>
                <div className='cardimg'>
                    <img src={userImg4} alt="UserIMG" />
                </div>
                <div className='cardInfo'>
                    <div className='starsContainer'>
                        <img className="stars" src={stars} alt="Stars" />
                        <p>4.2/5</p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam obcaecati at ipsum impedit nesciunt qui aliquid fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserRating
