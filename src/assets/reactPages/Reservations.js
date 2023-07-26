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
    <div className="reservation">
      <h2>Réserver votre table</h2>
      <p>
        Vous pouvez également effectuer vos réservations par sms au :
        06.29.84.84.36
      </p>
      <form ref={form} onSubmit={sendEmail} className="formReservation">
        <div className="leftForm">
          <label for="name">Nom</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Nom de la réservation"
            required
          />
          <label>Nombre de personnes</label>
          <input
            type="number"
            name="personne"
            placeholder="Nombre de personnes à table"
            required
          />
          <label>Date</label>
          <input
            type="date"
            name="date"
            placeholder="Date de la réservation"
            required
          />
          <label>Heure</label>
          <input
            type="time"
            name="time"
            placeholder="Votre heure d'arrivée"
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Votre e-mail"
            required
          />
        </div>
        <div className="formRight">
          <label>Commentaires</label>
          <textarea name="message" placeholder="Dites-nous en plus" />
          <input type="submit" value="Send" className="submit" />
        </div>
      </form>
    </div>
  );
};

export default Reservation;
