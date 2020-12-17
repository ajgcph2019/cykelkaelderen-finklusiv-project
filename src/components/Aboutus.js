import React from "react";
import shop from "../assets/images/shop.png";
import { Container, Row, Col } from "react-bootstrap";

function Aboutus() {
  return (
    <section className="bgdark" id="About-Us">
      <Container className="pt-5 pb-5 mt-5 ">
        <h3 className="mb-4 text-center">Om Os</h3>
        <Row>
          <Col xs={12} md={5} lg={6} className="mt-3 mr-5">
            <p>
              <strong>Sher Ahmad Safi</strong> har flere års erfaring med
               reparation af cykler og havde derfor en solidt fundament af
                erfaring at bygge på, da han overtog Cykel Kælderen.
            </p>
            <p>
              Tilfredse kunder, god service og høj kvalitet er vigtig for 
              Sherahmad.
            </p>
            <p>
              Har du brug for et godt råd vedrørende reparation af din cykel,
               er du altid velkommen til at besøge mig i butikken for at få 
               et godt råd, så vi sammen kan finde den rigtige løsning for 
               netop din cykel.
            </p>
          </Col>
          <Col xs={12} md={6} lg={5} className="pr-3 mr-2 pl-0 pr-0">
            <img src={shop} className="aboutusImage" alt="Cyklekaelderen" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Aboutus;
