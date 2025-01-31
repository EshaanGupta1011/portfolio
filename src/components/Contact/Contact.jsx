import React, { useEffect, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import thankYouAnimation from "../../assets/animation.json"; // Replace with your animation JSON file path

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setFormSubmitted(true);
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );

    e.target.reset();
  };

  const resetForm = () => {
    setFormSubmitted(false);
  };

  return (
    <div className="section-contact" id="contact">
      <div className="contact-heading-container">
        <h1>
          LET US <span>TALK</span>
        </h1>
      </div>

      <p className="contact-desc">
        Great ideas are shared when two minds communicate.
      </p>

      <div className="contact-form-container">
        {!formSubmitted ? (
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" value="697483" />
            <div className="form-input-field">
              <p>Your name:</p>
              <input name="user_name" placeholder="Lionel Messi" type="text" />
            </div>

            <div className="form-input-field">
              <p>Your email:</p>
              <input
                name="user_email"
                placeholder="example@gmail.com"
                type="email"
              />
            </div>

            <div className="form-input-field">
              <p>Your message:</p>
              <textarea name="message" placeholder="Write your heart out!" />
            </div>

            <button className="contact-btn" type="submit">
              SUBMIT
            </button>
          </form>
        ) : (
          <div className="thank-you-container">
            <div className="animation">
              <Lottie
                animationData={thankYouAnimation}
                loop={false}
                style={{ height: "300px", width: "300px" }}
              />
            </div>
            <h1>Thank you for reaching me out!</h1>
            <h2>Will revert shortly</h2>

            <div className="button-container">
              <button className="contact-btn" onClick={resetForm}>
                WRITE MORE!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
