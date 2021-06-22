import React from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

import './Contact.css'
init("user_nnPYK6NA9jtWaZeNHQayh");
    const sendEmail = (e)=>{
        e.preventDefault()
        emailjs.sendForm('service_0et7t8j', 'template_2s0hk6f', e.target,'user_nnPYK6NA9jtWaZeNHQayh')
        .then((result) => {
            console.log(result.text);
            alert("Email has been send!!")
        }, (error) => {
            console.log(error.text);
            alert("ops sorry for that you sms is not going")
        });
        e.target.reset()
    }
const Contact = () => {
    return (
        <section className="contact-container" id="contact">
        <div className="contact-wrapper main-container">
            <div className="contact-top-header">
                <h1 className="fw-bolder font-color-ping">CONTACT US</h1>
            </div>
            <div>
                <form onSubmit={sendEmail}  data-aos="zoom-in">
                    <div className="formContainer">
                        <input  className=" inputFiled" type="text" placeholder="First Name" name="name"/>
                        <input className=" inputFiled" type="text" placeholder="Last Name" name="name"/>
                        <input className=" inputFiled" type="text" placeholder="E-mail Address" name="email"/>
                        <input className=" inputFiled" type="text" placeholder="Place Number" name="number"/>
                    </div>
                
                    <textarea className="textarea"rows="8" placeholder="Enter Your Messages" name="message"></textarea>
                    <input type="submit" className="submitBtn"/>
                </form>
            </div>
        </div>
    </section>
    );
};

export default Contact;