import React from "react";

const Footer = () => {
  return (
    <footer className="ui segment">
      <div className="ui stackable nine column centered grid">
        <div className="centered row">
          <div className="column">
            <a href="/contact-us">Contactanos</a>
          </div>
          <div className="column">
            <a href="/about-us">Sobre Nosotros</a>
          </div>
          <div className="column">
            <a href="/legal">Terminos y Condiciones</a>
          </div>
          <div className="column">
            <button className="ui labeled icon basic button">
              <i className="low vision icon"></i>Activar accesibilidad
            </button>
          </div>
        </div>
        <div className="centered row">
          <p>
            <i className="copyright icon"></i>RNet 2018. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
