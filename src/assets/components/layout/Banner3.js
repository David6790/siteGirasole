import React from "react";

const Banner3 = () => {
  return (
    <div className="banner3 parralax3">
      <div className="Banner3Container">
        <h2> Où nous trouver </h2>
        <div className="infoWrapper">
          <div className="horaires">
            <p>Lundi - Jeudi : 12h - 14h puis 19h - 22h</p>
            <p>Vendredi - Dimanche : 12h - 14h puis 19h - 23h</p>
          </div>
          <div className="adresse">
            <div>
              <p>12 quai Saint-Nicolas</p>
              <p>67000 Strasbourg</p>
            </div>
            <div>
              <a
                href="https://www.google.fr/maps/place/Restaurant+Il+Girasole/@48.5785923,7.7465036,17z/data=!3m1!4b1!4m6!3m5!1s0x4796c9acb16a8373:0xc565e17f93e4cde8!8m2!3d48.5785923!4d7.7490785!16s%2Fg%2F1tlzz3ck?entry=ttu"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-location-dot"></i>
              </a>
            </div>
          </div>
          <div className="Nous contacter">
            <a href="mailto:rest.ilgirasole@gmail.com">
              Email : rest.ilgirasole@gmail.com
            </a>
            <p>Numero de téléphone : 03.88.37.16.76</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
