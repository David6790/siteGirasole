import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Reservation = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xpgmd0c",
        "template_w6e9k4p",
        form.current,
        "HMY_Qnyy89zicpgev"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Message</label>
      <textarea name="message" />
      <label>Date</label>
      <input type="date" name="date" />
      <label>Time</label>
      <input type="time" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Reservation;
