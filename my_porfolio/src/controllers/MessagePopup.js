import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "../styles/messagePopup.css";

const MessagePopup = (props) => {
  const form = useRef();

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ris136w",
        "template_4ap4bw6",
        form.current,
        "69KlKKIHgLpieXTiT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    props.handleClose();
  };

  const closePopup = (e) => {
    props.handleClose();
  };

  return (
    <div className="popup-box" onClick={closePopup}>
      <div className="box">
        <h1 className="form-title">Get in touch</h1>
        <form ref={form} onSubmit={sendMessage}>
          <input
            className="txt-input"
            type="text"
            name="user_name"
            placeholder="Name"
            required
          />
          <input
            className="txt-input"
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />
          <input
            className="txt-input"
            type="text"
            name="subject"
            placeholder="Subject"
          ></input>
          <textarea
            className="txt-input"
            type="text"
            name="message"
            placeholder="Message"
            rows="5"
            required
          ></textarea>
          <button className="form-btn" type="submit">
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessagePopup;
