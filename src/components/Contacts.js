import React from "react";
import mobile from "../assets/icons/phone.png";
import email from "../assets/icons/mail.png";
import address from "../assets/icons/location.png";
import facebook from "../assets/icons/facebook.png";
import time from "../assets/icons/time.png";
import cvr from "../assets/icons/cvr.png";


function VisitUs() {
  return (
      <div className="contact-container">
        <div className="cont">
          <div>
            <div className="contact-info">
              <img src={`${address}`} alt="addressIcon" />
              <a
                href="https://goo.gl/maps/MJPENivvh9zPpcZm7?share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Hersegade 34 A, kl, 4000 Roskilde</p>
              </a>
            </div>

            <div className="contact-info">
              <img src={`${facebook}`} alt="facebookIcon" />
              <a
                href="www.facebook.com/Cykelkaelderen/ "
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>www.facebook.com/Cykelkaelderen/</p>
              </a>
            </div>

            <div className="contact-info">
              <img src={`${email}`} alt="emailIcon" />
              <a href="mailto:shersafi4000@yahoo.com?subject=Inquiry about products">
                <p>shersafi4000@yahoo.com</p>
              </a>
            </div>
          </div>
        </div>

        <div className="cont">
          <div>
            <div className="contact-info">
              <img src={`${mobile}`} alt="mobileIcon" />

              <p>+46 32 12 13 </p>
            </div>

            <div className="contact-info">
              <img src={`${time}`} alt="timeIcon" />

              <p>08.00 - 18.00</p>
            </div>
            <div className="contact-info">
              <img src={`${cvr}`} alt="cvrIcon" />
                <p> 38176587</p>
            </div>
          </div>
        </div>
       
      </div>
    
  );
}

export default VisitUs;
