import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Iframe from "react-iframe";

function Map() {
  return (
    <div className="map-container">        
        <Iframe
            className="map"
            url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9007.59371691904!2d12.0857593!3d55.6385811!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd15fe0f03787cff5!2sCykelk%C3%A6lderen!5e0!3m2!1sen!2sdk!4v1607897081688!5m2!1sen!2sdk"
            width="100%"
            height="100%"
            /*id="myId"*/           
            display="initial"
            position="relative"
          />       
      </div>
  );
}

export default Map;

