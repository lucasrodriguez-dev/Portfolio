import React, { useContext, useRef, useState } from 'react';
import { ToastNotification } from './ToastNotification';
import { LanguageContext } from '../../contexts/LanguageContext';

export const ContactForm = () => {

    const { texts } = useContext(LanguageContext);

    const [emailStatus, setEmailStatus] = useState(null);
    const [show, setShow] = useState(true);
    const form = useRef();

    const showNotification = (status) => {
        setEmailStatus(status);
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 3500);
    }

    return (
        <article className="container" id="container-contact-form">
            {
                (emailStatus && show) && (
                    <ToastNotification status={emailStatus} />
                )
            }
            <form action="https://formsubmit.co/lucascsrodriguez@gmail.com" method="POST" ref={form} className="container">
                <input type="text" placeholder={texts.formName} name="name" id="name_input" required />
                <input type="email" placeholder={texts.formEmail} name="email" id="email_input" required />
                <textarea placeholder={texts.formMessage} name="message" id="message_input" required></textarea>
                <input className="button-primary" type="submit" id="submit_input" value={texts.formPrimaryButton} />
                <input type="hidden" name="_next" value="http://lucasrodriguez.netlify.app/"></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_subject" value="Portfolio Message"></input>
            </form>
        </article>
    )
}
