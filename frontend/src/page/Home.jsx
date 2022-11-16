import {data} from '../../API/api.js';
import { Formik } from "formik";

function Home() {
  return (
    <Formik
      initialValues={{
        nombre: "",
        telefono: "",
        localidad: "",
      }}
      onSubmit={(values) => {
        data(values)
      }}
    >
      {({ handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <input type="text" name="nombre" onChange={handleChange} />
          <input type="text" name="telefono" onChange={handleChange} />
          <input type="text" name="localidad" onChange={handleChange} />
          <button type="submit">enviar</button>
        </form>
      )}
    </Formik>
  );
}

export default Home;
