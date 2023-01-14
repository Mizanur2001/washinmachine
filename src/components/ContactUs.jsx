import React from 'react'
import './css/ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contactUsMainContainer'>
            <div className='headingContainer'>
                <h2>Contact Us</h2>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsa eum sequi eos saepe repellendus.</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div className="formContainerRapper">
                <div className='contactUsInfo'>
                    <div className='phone'>
                        <span className="material-symbols-outlined Icons location">
                            location_on
                        </span>
                        <div>
                            <p className='tag'>Location</p>
                            <p>Chakma Road,Kadampukur, New Town , Kolkata</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <span className="material-symbols-outlined Icons call">
                            call
                        </span>
                        <div>
                            <p className='tag'>Phone</p>
                            <p>7811925012</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <span className="material-symbols-outlined Icons email">
                            email
                        </span>
                        <div>
                            <p className='tag'>Email</p>
                            <p>support@washinmachine.com</p>
                        </div>
                    </div>
                </div>
                <form action="/" method="post">
                    <div>
                        <span className="material-symbols-outlined">
                            badge
                        </span>
                        <input type="text" placeholder='Enter Your Name' />
                    </div>

                    <div>
                        <span className="material-symbols-outlined">
                            smartphone
                        </span>
                        <input type="number" placeholder='Phone Number' />
                    </div>

                    <div>
                        <span className="material-symbols-outlined">
                            mail
                        </span>
                        <input type="email" placeholder='Enter you Email' />
                    </div>

                    <div className='InputIconRapper mr18'>
                        <span className="material-symbols-outlined">
                            comment
                        </span>
                        <textarea name="message" id="message" placeholder='Enter Your Message'></textarea>
                    </div>
                    <button className='submitBtn'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
