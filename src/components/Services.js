import React from "react";
import product1 from "../assets/images/product1.jpg";
import product6 from "../assets/images/product6.jpeg";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/pdt4.jpeg";
import product2 from "../assets/images/product2.png";
import product5 from "../assets/images/product5.jpg";
import arrow from "../assets/images/arrow.png";


function Services() {
  return (
    <section id="Services" className="content-container">    
    <div className="box-cont">
    <h3 className="mb-4 text-center">Services</h3>  
      <p className="mb-4 text-center">Cykel-reparation og service i topklasse!</p>
      <p className="mb-4 text-center">
      Vi ved du har brug for, at din cykel er klar,
      når du skal bruge den. Derfor reparerer vi din
      cykel imens du er på arbejde eller i skole,
      så den er klar til brug, så snart  har fri.      
      </p>
    </div>
     <div className="images-content">
        <div className="arrow-img">
          <img src={`${arrow}`} alt="arrow1"/>
          <span className="arrow-text">Aflevering af cykel fra kl. <strong>09:00</strong></span>
        </div>
        <div className="arrow-img">        
          <img src={`${arrow}`} alt="arrow2" />  
          <span className="arrow-text">Vi laver din cykel mens du er på job eller i skole</span>        
        </div>
        <div className="arrow-img">
          <img src={`${arrow}`} alt="arrow3" />
          <span className="arrow-text">Afhentning af repareret cykel indtil kl. <strong>17.30</strong></span>
        </div>
      </div>
     
      <div className="images-content">
        <div className="img-item">
          <img src={`${product6}`} alt="product6" />
        </div>
        <div className="img-item">
          <img src={`${product5}`} alt="product5" />
        </div>
        <div className="img-item">
          <img src={`${product4}`} alt="product4" />
        </div>
      </div>
      
      <div className="box-cont">
        <p className="mb-4 text-center">
          Kæmpe lager af brugte (fin stand) cykler. Der er både dame og herre cykler samt City cykler og andre varianter.
          Alle cykler har fået en god kærlig hånd hos cykelkælderen.      
        </p>
      </div>

      <div className="images-content">
        <div className="img-item">
          <img src={`${product1}`} alt="product1" />
        </div>
        <div className="img-item">
          <img src={`${product2}`} alt="product2" />
        </div>
        <div className="img-item">
          <img src={`${product3}`} alt="product3" />
        </div>
      </div>
      
    </section>
  );
}

export default Services;