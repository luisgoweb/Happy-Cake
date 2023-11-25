
import { GiCakeSlice } from 'react-icons/gi';

const Inicio = () => {
  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-4 text-center text-primary">Bienvenidos a Happy Cake</h1>
        <h2 className="text-center text-muted mb-5">El lugar de los pasteles felices</h2>

        <div className="row mt-5">
          <div className="col-lg-12 text-center">
            <GiCakeSlice className="cake-icon" size="10em" />
          </div>
          <div className="col-lg-12 mt-4">
            <p className="text-info">
              En Happy Cake, creamos delicias que iluminan tus celebraciones. Nuestras tortas son una explosión de sabor y color, diseñadas para alegrar tus momentos más especiales.
            </p>
            <p className="text-success">
              Con ingredientes frescos y un toque de creatividad, cada torta es una obra maestra única. Desde tortas clásicas que despiertan nostalgia hasta creaciones personalizadas que reflejan tu estilo, tenemos algo para cada ocasión.
            </p>
            <p className="text-warning">
              ¡Deja que Happy Cake sea parte de tus momentos felices! Explora nuestro menú y descubre la magia que solo un pastel delicioso puede ofrecer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;
