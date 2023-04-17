import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "../styles/messagePopup.css";

const MessagePopup = (props) => {
  const form = useRef();
  console.log();

  const sendMessage = (e) => {
    console.log("Is this function triggered...");
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

  return (
    <div className="popup-box">
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
          <span className="error-message">Enter valid value.</span>
          <input
            className="txt-input"
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />
          <span className="error-message">Enter valid value.</span>
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
            required
          ></textarea>
          <button type="submit">Send Email</button>
        </form>
      </div>
    </div>
  );
};

export default MessagePopup;
