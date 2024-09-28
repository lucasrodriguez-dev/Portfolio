import React, { useEffect } from 'react';
import { ContactForm } from '../mycomponents/ContactForm';

export const ContactPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <h3 className="heading">Contact</h3>
      <article className="container-main" id="container-contact-page">
        <ContactForm />
        <article id="container-contact-info">
          <div className="blob">
            <img src="/images/contact.png" id="image-contact" />
          </div>
        </article>
      </article>
    </section>
  )
}
