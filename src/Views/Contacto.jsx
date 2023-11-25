

import React from 'react';
import { FaBirthdayCake } from 'react-icons/fa';

const Contacto = () => {
  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-4 text-center text-primary">¡Contáctanos!</h1>
        <div className="row mt-5">
          <div className="col-lg-6 text-center">
            <FaBirthdayCake className="cake-icon" size="10em" />
          </div>
          <div className="col-lg-6">
            <p className="text-info">
              ¿Tienes alguna pregunta o comentario? ¡Nos encantaría escucharte!
            </p>
            <form>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea className="form-control" id="mensaje" rows="4" placeholder="Escribe tu mensaje"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;

