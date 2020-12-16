import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Iframe from "react-iframe";
import { Container} from "react-bootstrap";

function Map() {
  return (
    <div>
      <Container className="pt-5 pb-5 mt-5 ">
      <h3 className="mb-4 mr-3 text-center">Besøg Os</h3>
    
    <div id="Visit-Us">

      <h5 className="mb-3 mr-3 text-center">Besøg os på Cyklekaelderen, hvor kunden er altid i 
      centrum. Vi glæder os at giver dig første klasse service</h5>
     
        <Iframe
            url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9007.59371691904!2d12.0857593!3d55.6385811!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd15fe0f03787cff5!2sCykelk%C3%A6lderen!5e0!3m2!1sen!2sdk!4v1607897081688!5m2!1sen!2sdk"
            width="100%"
            height="350px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />  
      </div>
      </Container>
      </div>
  );
}

export default Map;