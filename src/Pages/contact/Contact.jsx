import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

const Contact = () => {
  const formRef = useRef(null);

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xrhtgg3",
        "template_u2tbqt8",
        e.target,
        "cTEoEa_jJoVFKcRok"
      )
      .then((res) => {
        console.log(res);
        if (formRef.current) {
          formRef.current.reset();
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
           <h3 className="contact__title">Don't be Shy!  </h3>
          <p className="contact__description">
            Welcome to our contact page. We value your interest and aim to
            provide efficient assistance. Should you have inquiries, partnership
            proposals, or require further information, please utilize the
            provided contact form or reach out using the contact details below.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <span className="info__desc">
                  muhammadabdullah6075@gmail.com
                </span>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                 <span className="info__title">Call me</span>
                <span className="info__desc">+92 302 4495957</span>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a
              href="https://www.facebook.com/profile.php?id=100088890879530&mibextid=ZbWKwL"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/itx.ab3?igshid=MzMyNGUyNmU2YQ=="
              className="contact__social-link"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-qayyum-678071294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <form className="contact__form" onSubmit={sendEmail} ref={formRef}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                name="Name"
                className="form__control"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                name="User-Email"
                className="form__control"
                required
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                name="Subject"
                className="form__control"
                required
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              name="User-message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;