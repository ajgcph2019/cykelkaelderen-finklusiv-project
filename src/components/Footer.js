import React from "react";
import { Container} from "react-bootstrap";

function Footer() {
  return (
    <footer>
        
        <section className="footer">
          <Container className="text-center pt-3 pb-3">
      <div>
        
        <span>
          <a
            href="https://www.hackyourfuture.dk/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            HackYourFuture{" "}
          </a>
          <span> &copy; </span> 2020 All rights reserved. Partnered with{" "}
          <span>
            <a
              href="https://www.finklusiv.dk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Finklusiv.dk{" "}
            </a>
          </span>{" "}
        </span>
      </div>

      <div>
        <span>
          Designed and developed by{" "}
          <span>
            <a
              href="https://www.linkedin.com/in/annajohngeorge/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Anna John George{" "}
            </a>
          </span>
          and{" "}
          <span>
            <a
              href="https://www.linkedin.com/in/deepthidukka/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Deepthi Dukka{" "}
            </a>
          </span>
        </span>
        
      </div>
      </Container>
    </section>
  </footer>
  );
}

export default Footer;
