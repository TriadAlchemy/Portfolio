import React from 'react'
import { useState } from 'react'
import './Contact.css'
import mail_icon from '../assets/mail.svg'
import call_icon from '../assets/call.svg'
import location_icon from '../assets/location.svg'
import Alert from './alert/Alert.jsx'



const Contact = () => {
    const [result, setResult] = React.useState("");
    const [showAlert, setShowAlert] = useState(false);
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5274ac29-2227-4560-bed7-d2c69f4062c6");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Message recived");
        event.target.reset();
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      } else {
        console.log("Error", data);
        
      }
    } 
  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
        </div>
        <div className='contact-sestion'>
            <div className='contact-left'>
                <h1>Let's Talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className='contact-details'>
                    <div className='contact-detail, ic1'>
                        <img src={mail_icon} alt="" /> <p>triardalchemy26@gmail.com</p>
                    </div>
                    <div className='contact-detail, ic2'>
                        <img src={call_icon} alt="" /><p>[+91]8078404482</p>
                    </div>
                    <div className='contact-detail, ic3'>
                        <img src={location_icon} alt="" /> <p>TVM,India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name'/>
                <label htmlFor=''>Your Email</label>
                <input type='email' placeholder='Enter your email' name='email'/>
                <label htmlFor=''>Write your message</label>
                <textarea name='message' rows='8' placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
            {showAlert && <Alert message={result} onClose={() => setShowAlert(false)} />}
        </div>
        
    </div>
  )
}

export default Contact