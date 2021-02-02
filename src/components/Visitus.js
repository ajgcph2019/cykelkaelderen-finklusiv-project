import React from "react";
import Map from "./Map.js";
import {FiPhoneCall} from "react-icons/fi";
import {GiHouse} from "react-icons/gi";
import {FaFacebook} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import {AiOutlineFieldTime} from "react-icons/ai";
import {AiTwotonePlusCircle} from "react-icons/ai";

function VisitUs() {
  return (
    <section id="Visit-Us" >    
      <div className="box-cont" > 
        <h3 className="mb-4 text-center">Besøg Os</h3>     
        <p className="mb-4 text-center">
           Besøg os på Cykelkælderen, hvor kunden altid er i centrum.    
        </p>
      </div>     
    
      <div className="contact-container" >           
        <div className="map-section">
          <Map className="map"/>
        </div>
        <div className="contact-section">
          <div>
            <div className="contact-info">
              <div>
                <GiHouse size="3em" color="brown"/> 
              </div>
              <a
                href="https://goo.gl/maps/xfrLaboa7w7XAq9r5?share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Hersegade 34 A, kl, 4000 Roskilde</p>
              </a>
            </div>

            <div className="contact-info">
              <div>
                <FaFacebook size="3em" color="brown"/>
              </div>
              <a
                href="https://www.facebook.com/Cykelkaelderen "
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>facebook.com/Cykelkaelderen </p>
              </a>
            </div>

            <div className="contact-info">
              <div>
                <HiMail size="3em" color="brown"/>
              </div>
              <a href="mailto:shersafi4000@yahoo.com?subject=Inquiry about products">
                <p>shersafi4000@yahoo.com</p>
              </a>
            </div>
          
            <div className="contact-info">
              <div>
                <FiPhoneCall size="3em" color="brown"/>
              </div>
              <p>+46 32 12 13 </p>
            </div>

            <div className="contact-info">
              <div>
                <AiOutlineFieldTime size="3em" color="brown"/>
              </div>      
              <p>09-18 (weekdays), 09-15 (Saturdays), Sundays (closed)</p>            
            </div>
        
             
            <div className="contact-info">
              <div className="CVR">
                <AiTwotonePlusCircle  size="3em" color="brown"/> 
                <span class="inner-num">CVR</span>                               
              </div>              
              <p> 38176587</p>
            </div>
          </div>
      </div>
    </div>      
  </section>
  );
}
export default VisitUs;
