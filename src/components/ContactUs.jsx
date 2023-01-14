import React, { useState } from 'react'
import axios from 'axios'
import './css/ContactUs.css'

const ContactUs = () => {
    const [errMsg, setErrMsg] = useState({ status: false, msg: "" })
    const [succMsg, setsuccMsg] = useState({ status: false, msg: "" })
    const [msgInfo, setMsgInfo] = useState({ name: "", phone: "", email: "", msg: "" })
    const [loding, setloading] = useState(false)

    const onChange = (e) => {
        setMsgInfo({ ...msgInfo, [e.target.name]: e.target.value })
        setErrMsg({ status: false, msg: "" })
    }

    const onSubmit = (e) => {
        setloading(true)
        e.preventDefault()
        if (msgInfo.name === '' || msgInfo.email === "" || msgInfo.msg === '') {
            setloading(false)
            setErrMsg({ status: true, msg: "All field Required" })
        }
        else if (msgInfo.phone.length !== 10) {
            setloading(false)
            setErrMsg({ status: true, msg: "Invalid Phone " });
        }
        else {
            axios.post('http://localhost:5000/sendmail', { name: msgInfo.name, email: msgInfo.email, phone: msgInfo.phone, msg: msgInfo.msg }).then(responce => {
                setMsgInfo({
                    name: "", phone: "", email: "", msg: ""
                });
                setsuccMsg({ status: true, msg: 'Message Sent Successfully' })
                setloading(false)
            }).catch(err => { console.log(err) })
        }
    }

    return (
        <div className='contactUsMainContainer'>
            <div className='headingContainer'>
                <h2>Contact Us</h2>
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
                <form>
                    {errMsg.status && <div className='errMsg'>
                        <span>{errMsg.msg}</span>
                    </div>}
                    {succMsg.status && <div className='succMsg'>
                        <span>{succMsg.msg}</span>
                    </div>}
                    <div>
                        <span className="material-symbols-outlined">
                            badge
                        </span>
                        <input type="text" placeholder='Enter Your Name' name='name' onChange={onChange} value={msgInfo.name} />
                    </div>

                    <div>
                        <span className="material-symbols-outlined">
                            smartphone
                        </span>
                        <input type="number" placeholder='Phone Number' name='phone' onChange={onChange} value={msgInfo.phone} />
                    </div>

                    <div>
                        <span className="material-symbols-outlined">
                            mail
                        </span>
                        <input type="email" placeholder='Enter you Email' name='email' onChange={onChange} value={msgInfo.email} />
                    </div>

                    <div className='InputIconRapper mr18'>
                        <span className="material-symbols-outlined">
                            comment
                        </span>
                        <textarea name="msg" id="message" placeholder='Enter Your Message' onChange={onChange} value={msgInfo.msg}></textarea>
                    </div>
                    <button disabled={loding} className='submitBtn' onClick={onSubmit}>{loding ? 'loading...' : 'Submit'}</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs
