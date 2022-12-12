import React, {useRef, useState} from 'react';
import insta from "../../../svgs/insta.svg";
import facebook from "../../../svgs/facebook.svg";
import contactbackground from "../../../images/contactbackground.jpg";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import emailjs from '@emailjs/browser'

const ContactForm = ({},ref) => {

    const form = useRef();
    const [formMessage, setFormMessage] = useState();
    const [formSucceed, setFormSucceed] = useState()
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mx0uxdz', 'template_y7c4bsc', form.current, 'QusdMi8NA3d87le69')
        .then((result) => {
        setFormSucceed(true)
        setFormMessage("Wiadomość została wysłana")
        e.target.reset()
        }, (error) => {
        setFormSucceed(false)
        setFormMessage("Nie udało się wysłać wiadomości")
        });
    };

  return (
    <section ref={ref} className="contactform-container">
        <div className="background-container"><LazyLoadImage src={contactbackground} alt="tło" width="100%" height="100%"/></div>
        <div className="heading-container">
            <div className='heading-content flex-col space-between'>
                <div className='heading flex-col'>
                    <h2>Masz pytania?</h2>
                    <h2 className='migra bold'>Skontaktuj się ze mną!</h2>
                </div>
                <div className='icons desktop flex-row'>
                    <a target="_blank" href="https://www.instagram.com/happyeverafter_wedding/?igshid=YmMyMTA2M2Y%3D"><img src={insta}></img></a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100087017143733"><img src={facebook}></img></a>
                </div>
            </div>
        </div>
        <div className='form-container'>
            <form onSubmit={sendEmail} ref={form} className='flex-col'>
                <div className='flex-col textinputs-container'>
                    <div className="flex-row space-between">
                        <div className='flex-col'>
                            <label htmlFor='user_name'>Imię:</label>
                            <input required maxlength="20" name='user_name' type='text'></input>
                        </div>
                        <div className='flex-col'>
                            <label htmlFor='user_email'>Adres e-mail:</label>
                            <input maxlength="320" required name='user_email' type='text'></input>
                        </div>
                    </div>
                    <div className="flex-row space-between">
                        <div className="flex-col">
                            <label htmlFor='user_phonenumber'>Numer telefonu:</label>
                            <input required maxlength="12" name='user_phonenumber' type='text'></input>
                        </div>
                        <div className='flex-col'>
                            <label htmlFor='topic'>Temat wiadomości:</label>
                            <input required maxlength="50" name='topic' type='text'></input>
                        </div>
                    </div>
                </div>
                <div>
                    <textarea required name='message'></textarea>
                </div>
                <input type="submit"></input>
                <p className={`form-message ${formSucceed ? "succeed" : "failed"}`}>{formMessage}</p>
            </form>
        </div>
        <div className='icons mobile flex-row'>
            <a target="_blank" href="https://www.instagram.com/happyeverafter_wedding/?igshid=YmMyMTA2M2Y%3D"><img alt="Ikona przedstawiająca logo Instagrama" src={insta}></img></a>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100087017143733"><img alt="Ikona przedstawiająca logo Facebooka" src={facebook}></img></a>
        </div>
        <adress className="bottom-text-contact">
            <a href="tel:+48 662-331-337">+48 662-331-337</a>
            <a href="mailto:office@happyeverafterwedding.pl">office@happyeverafterwedding.pl</a>
        </adress>
    </section>
  )
}
const forwardedContactForm = React.forwardRef(ContactForm)
export default forwardedContactForm