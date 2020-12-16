import React from "react";
import product1 from "../assets/images/product1.jpg";
import product6 from "../assets/images/product6.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.jpg";
import product2 from "../assets/images/product2.png";
import product5 from "../assets/images/product5.jpg";
import arrow1 from "../assets/images/arrow1.png";
import arrow2 from "../assets/images/arrow2.png";
import arrow3 from "../assets/images/arrow3.png";


function Services() {
  return (
    <section id="content" className="content-container">
     <p>Cykel-reparation og service i topklasse !</p>
     <div className="images-content">
        <div className="img-item">
          <img src={`${arrow1}`} alt="arrow1" />
        </div>
        <div className="img-item">
          <img src={`${arrow2}`} alt="arrow2" />
        </div>
        <div className="img-item">
          <img src={`${arrow3}`} alt="arrow3" />
        </div>
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

      <div className="box-cont">
        <p>
           Vi ved du har brug for, at din cykel er klar,
            når du skal bruge den. Derfor reparerer vi din cykel
            imens du er på arbejde / i skole, så den er klar til
            brug, så snart  har fri.
         
        </p>
      </div>
      <div className="images-content">
        <div className="img-item">
          <img src={`${product4}`} alt="product4" />
        </div>
        <div className="img-item">
          <img src={`${product5}`} alt="product5" />
        </div>
        <div className="img-item">
          <img src={`${product6}`} alt="product6" />
        </div>
      </div>
    </section>
  );
}

export default Services;