import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="ui segment">
      <div className="ui stackable nine column centered grid">
        <div className="centered row">
          <div className="column">
            <Link to={'/contact-us'}>Contactanos</Link>
          </div>
          <div className="column">
            <Link to={'/about-us'}>Sobre Nosotros</Link>
          </div>
          <div className="column">
            <Link to={'/legal'}>Terminos y Condiciones</Link>
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
