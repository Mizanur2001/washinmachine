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
                        Great service! Reliable pickup and delivery, great care of our clothes, and much more reasonable prices and faster service than the Otrers!!.... I strongly recommended This service
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
                        <p>4.3/5</p>
                    </div>
                    <p>
                        My laundry was picked up very fast and i got it back the same day, everything was just as i expected, competitive prices and convenient payment solutions. Moreover i once had a question and the customer service replied quickly and was very friendly. I use this service now everytime
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
                        Top service in Taipei - I highly recommend this company! Professional, painless, and great value for money. Getting clean, well-folded clothes back at the home on the same day (at standard next-day price) made a potential chore into a pleasure 🤩.
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
                        Excellent! I first used this service a little over a year ago while in Taipei and then I just used it again on another trip to Taipei about a week ago. Same great service. Very easy process, perfect service, good price, highly recomnended
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserRating
