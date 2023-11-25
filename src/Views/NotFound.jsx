

import { FaSadTear } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="text-danger mb-4">¡Oops! Página no encontrada</h1>
      <FaSadTear className="text-muted" size="5em" />
      <p className="text-muted mt-3">
        Parece que te has perdido en el mundo de los pasteles. ¡No te preocupes, estamos aquí para ayudarte!
      </p>
      <p className="text-muted">
        Regresa a <a href="/">Inicio</a> para descubrir más deliciosas sorpresas.
      </p>
    </div>
  );
}

export default NotFound;
